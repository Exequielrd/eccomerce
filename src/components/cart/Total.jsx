"use client"

export default function Total() {
  let products = []
  let deliveryPrice = null

  if (typeof window !== "undefined") {
    products = JSON.parse(localStorage.getItem("products"))
    deliveryPrice = localStorage.getItem("delivery-price")
  }

  const total = products.reduce((acc, el) => {
    return acc + el.price * el.qty
  }, 0)

  return (
    <span className="text-xl font-semibold text-dark">
      ${(total + Number(deliveryPrice)).toFixed(2)}
    </span>
  )
}
