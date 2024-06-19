import Items from "@/components/cart/Items"
import Link from "next/link"
import React from "react"

export default function page() {
  return (
    <section className="h-[70vh] container py-12 md:py-24 text-center">
      <h2 className="text-3xl font-semibold">No se pudo procesar el pago</h2>
      <Link
        href="/"
        className="inline-block mt-3 mb-8 text-sm text-blue-500 hover:underline"
      >
        Volver
      </Link>
      <Items />
    </section>
  )
}
