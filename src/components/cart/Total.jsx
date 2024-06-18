"use client"

export default function Total() {
  const products = JSON.parse(localStorage.getItem("products")) || []
  const total = products.reduce((acc, el) => {
    return acc + el.price * el.qty
  }, 0)
  const deliveryPrice = localStorage.getItem("delivery-price")

  return (
    <span className="text-xl font-semibold text-dark">
      ${(total + Number(deliveryPrice)).toFixed(2)}
    </span>
  )
}
