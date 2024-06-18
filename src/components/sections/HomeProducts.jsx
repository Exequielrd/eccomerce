import { products } from "@/lib/products"
import ProductSlider from "./ProductSlider"

export default function HomeProducts() {
  return (
    <div className="container flex flex-col gap-12 py-24">
      <ProductSlider title="Mas Vendidos" url="/products" items={products} />
      <ProductSlider
        title="Últimos productos"
        url="/products"
        items={products}
      />
      <ProductSlider title="Oferta" url="/products" items={products} />
    </div>
  )
}
