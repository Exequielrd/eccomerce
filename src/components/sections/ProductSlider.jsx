import { ProductCard } from "../cards/ProductCard"
import Link from "next/link"
import React from "react"

export default function ProductSlider({ title, url = "/products", products }) {
  return (
    <section className="h-fit">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-normal">{title}</h2>
          <Link href={url} className="text-sm text-blue-500 hover:underline">
            Ver todos
          </Link>
        </div>
      )}
      <div className="flex gap-5 h-[550px]">
        {products?.map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
