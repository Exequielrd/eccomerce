import { Button } from "@/components/ui/button"
import Items from "@/components/cart/Items"
import Subtotal from "@/components/cart/Subtotal"
import Link from "next/link"

export default async function page() {
  return (
    <section className="container min-h-[70vh] py-12 md:py-24 flex flex-col lg:flex-row gap-10">
      <div className="flex-grow">
        <h2 className="mb-10 text-3xl font-medium">Carrito</h2>
        <Items />
      </div>
      <div className="lg:w-1/3">
        <h2 className="mb-10 text-3xl font-medium">Resumen</h2>
        <hr className="my-5" />
        <p className="flex items-center justify-between text-sm text-subtitle">
          <span>Subtotal</span>
          <Subtotal />
        </p>
        <p className="flex items-center justify-between mt-3 text-sm text-subtitle">
          <span>Envío</span>
          <span>$0.00</span>
        </p>
        <hr className="my-5" />
        <p className="flex items-center justify-between mt-3 text-sm text-subtitle">
          <span>Total</span>
          <Subtotal />
        </p>
        <hr className="my-5" />
        <Button asChild>
          <Link href="/checkout">Continuar</Link>
        </Button>
      </div>
    </section>
  )
}
