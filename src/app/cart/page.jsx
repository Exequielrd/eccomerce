import { Button } from "@/components/ui/button"
import { supabaseServer } from "@/supabase/supabase"
import Items from "@/components/cart/Items"
import Subtotal from "@/components/cart/Subtotal"
import Link from "next/link"

export default async function page() {
  const supabase = await supabaseServer()
  const { data, error } = await supabase.from("products").select()
  console.log(data)

  return (
    <section className="container min-h-[50vh] my-24 flex gap-10">
      <div className="flex-grow">
        <h2 className="mb-10 text-3xl font-medium">Carrito</h2>
        <Items />
      </div>
      <div className="w-1/3">
        <h2 className="mb-10 text-3xl font-medium">Resumen</h2>
        <hr className="my-5" />
        <p className="flex items-center justify-between text-sm text-subtitle">
          <span>Subtotal</span>
          <Subtotal />
        </p>
        <p className="flex items-center justify-between mt-3 text-sm text-subtitle">
          <span>Envío</span>
          <span>$0</span>
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
