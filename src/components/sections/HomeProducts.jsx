import { supabaseServer } from "@/supabase/supabase"
import ProductSlider from "./ProductSlider"

export default async function HomeProducts() {
  const supabase = await supabaseServer()
  const { data: products, error } = await supabase.from("products").select()

  return (
    <div className="container flex flex-col gap-12 py-24">
      <ProductSlider title="Mas Vendidos" products={products} />
      <ProductSlider title="Últimos productos" products={products} />
      <ProductSlider title="Oferta" products={products} />
    </div>
  )
}
