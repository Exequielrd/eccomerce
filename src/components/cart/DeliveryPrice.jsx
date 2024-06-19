"use client"

export default function DeliveryPrice() {
  let delivery = null

  if (typeof window !== "undefined") {
    delivery = localStorage.getItem("delivery-price")
  }

  return <span>${delivery || "0.00"}</span>
}
