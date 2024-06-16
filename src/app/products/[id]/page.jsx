// import { CartModal } from "@/components/modals/CartModal"
// import { Button } from "@/components/ui/button"
import ProductSlider from "@/components/sections/ProductSlider"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function page() {
  const product = {
    id: 1,
    name: "Audio Arrogance AuralElite",
    description: "Audio Arrogance AuralElite",
    price: "249.00",
    image:
      "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
    variants: [
      { title: "Color", values: ["Black", "silver"] },
      { title: "Noise Cancelling", values: ["Black", "silver"] },
    ],
  }

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
    <section className="container py-12">
      <div className="flex items-center w-full gap-5 h-[80vh] mb-24">
        <div className="w-1/4">
          <h2 className="mb-3 text-3xl font-semibold">{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div className="relative flex-grow h-full overflow-hidden border rounded-xl bg-medium border-border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end w-1/4 gap-5">
          <div className="flex flex-col w-full gap-5">
            {product.variants.map((variant, index) => (
              <div key={index} className="flex flex-col gap-3 capitalize">
                <p className="text-sm">Select {variant.title}</p>
                <div className="flex gap-3">
                  {variant.values.map((value) => (
                    <p
                      key={value}
                      className="flex-grow px-3 py-3 text-xs text-center border rounded-lg border-border bg-medium"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <p className="mb-3 text-2xl font-bold">${product.price}</p>
            <small>Sin stock</small>
            <Button disabled>Comprar</Button>
          </div>
        </div>
      </div>
      <div className="mb-10 text-center">
        <h2 className="mb-5 text-sm text-subtitle">Productos relacionados</h2>
        <p className="text-3xl">Estos productos podrían interesarte.</p>
      </div>
      <ProductSlider linkUrl="/products" items={items} />
    </section>
  )
}
