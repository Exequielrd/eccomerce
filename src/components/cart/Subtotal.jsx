"use client"

export default function Subtotal() {
  let products = []

  if (typeof window !== "undefined") {
    products = JSON.parse(localStorage.getItem("products"))
  }

  const total = products?.reduce((acc, el) => {
    return acc + el.price * el.qty
  }, 0)

  return <span>${total?.toFixed(2) || "0.00"}</span>
}
