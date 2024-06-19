import { ProductCard } from "@/components/cards/ProductCard"
import { supabaseServer } from "@/supabase/supabase"

export default async function page() {
  const supabase = await supabaseServer()
  const { data: products, error } = await supabase.from("products").select()

  return (
    <section className="container py-12 md:py-24 min-h-[70vh]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 place-items-center md:grid-cols-3">
        {products?.map((product) => (
          <div className="h-[450px] w-full" key={product.id}>
            <ProductCard item={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
