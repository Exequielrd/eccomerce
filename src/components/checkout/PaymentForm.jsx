"use client"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { useEffect, useState } from "react"

export default function PaymentForm() {
  const [preferenceId, setPreferenceId] = useState(null)

  async function getPreference() {
    const products = JSON.parse(localStorage.getItem("products"))
    const deliveryPrice = localStorage.getItem("delivery-price")
    const res = await fetch("/api/create-preference", {
      method: "POST",
      body: JSON.stringify([
        ...products,
        { name: "Envío", qty: 1, price: deliveryPrice },
      ]),
    })
    const { preferenceId } = await res.json()
    setPreferenceId(preferenceId)
  }

  useEffect(() => {
    initMercadoPago("APP_USR-10cffa63-69d0-44ec-b847-00f558b867cc")
    getPreference()
  }, [])

  return (
    <Wallet
      initialization={{ preferenceId }}
      customization={{ texts: { valueProp: "smart_option" } }}
    />
  )
}
