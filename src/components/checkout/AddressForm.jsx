"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"

export default function AddressForm() {
  const [formData, setFormData] = useState()
  const router = useRouter()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function saveDeliveryInfo(e) {
    e.preventDefault()
    localStorage.setItem("delivery-info", JSON.stringify(formData))
    router.push("?step=delivery")
  }

  return (
    <form className="grid grid-cols-2 gap-5" onSubmit={saveDeliveryInfo}>
      <Input
        type="text"
        placeholder="Nombre"
        name="name"
        required
        onChange={(e) => handleChange(e)}
      />
      <Input
        type="text"
        placeholder="Apellido"
        name="surname"
        required
        onChange={(e) => handleChange(e)}
      />
      <Input
        type="text"
        placeholder="Dirección"
        name="address"
        required
        onChange={(e) => handleChange(e)}
      />
      <Input
        type="text"
        placeholder="Código postal"
        name="postal-code"
        required
        onChange={(e) => handleChange(e)}
      />
      <Input
        type="text"
        placeholder="Provincia"
        name="province"
        required
        onChange={(e) => handleChange(e)}
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={(e) => handleChange(e)}
      />
      <Button>Continuar</Button>
    </form>
  )
}
