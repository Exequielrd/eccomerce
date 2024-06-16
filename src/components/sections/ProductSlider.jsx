import { ProductCard } from "../cards/ProductCard"
import Link from "next/link"
import React from "react"

export default function ProductSlider({ title, url = "#", items }) {
  return (
    <section className="h-fit">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-normal">{title}</h2>
          <Link href={url} className="text-sm">
            Ver todos
          </Link>
        </div>
      )}
      <div className="flex h-[550px]">
        {items.map((item) => (
          <ProductCard item={items[0]} key={item.id} />
        ))}
      </div>
    </section>
  )
}
