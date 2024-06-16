import ProductSlider from "./ProductSlider"

export default function HomeProducts() {
  const items = [
    {
      id: 1,
      name: "Audio Arrogance AuralElite",
      price: "249.00",
      image:
        "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
    },
  ]
  return (
    <div className="container flex flex-col gap-12 py-24">
      <ProductSlider title="Mas Vendidos" url="/products" items={items} />
      <ProductSlider title="Últimos productos" url="/products" items={items} />
      <ProductSlider title="Oferta" url="/products" items={items} />
    </div>
  )
}
