"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { useState } from "react"

export default function BuyButton({ disabled, product, variants, price }) {
  const router = useRouter()
  const [loading, setLoading] = useState()

  function setProduct() {
    setLoading(true)
    const products = JSON.parse(localStorage.getItem("products")) || []
    const exist = products.filter(
      (prod) =>
        prod.id === product.id &&
        Object.values(variants).sort().join("") ===
          Object.values(prod.variants).sort().join("")
    )

    try {
      if (exist.length) {
        localStorage.setItem(
          "products",
          JSON.stringify(
            products.map((prod) => {
              if (
                prod.id === product.id &&
                Object.values(variants).sort().join("") ===
                  Object.values(prod.variants).sort().join("")
              ) {
                prod.qty++
              }
              return prod
            })
          )
        )
      } else {
        localStorage.setItem(
          "products",
          JSON.stringify([...products, { ...product, variants, price, qty: 1 }])
        )
      }

      router.push("/cart")
      setLoading(false)
    } catch (error) {
      console.error("Error storing object in localStorage", error)
      setLoading(false)
    }
  }

  return (
    <Button disabled={disabled || loading} onClick={setProduct}>
      Comprar
    </Button>
  )
}
