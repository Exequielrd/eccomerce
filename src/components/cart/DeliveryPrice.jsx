"use client"

export default function DeliveryPrice() {
  const delivery = localStorage.getItem("delivery-price")

  return <span>${delivery}</span>
}
