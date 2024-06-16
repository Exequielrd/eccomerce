import { ProductCard } from "@/components/cards/ProductCard"

export default function page({ params }) {
  const products = [
    {
      image: "/logo.png",
      secondary_img: "/logo.png",
      name: "Shoes",
      description: "Shoes asdasd",
      price: 100,
      id: 1,
    },
  ]

  return (
    <section className="container py-24 min-h-[70vh]">
      <div className="flex items-end gap-2">
        <h2 className="text-4xl font-bold uppercase md:text-5xl">Title</h2>
        <span>[1200]</span>
      </div>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolor?
      </p>
      <div className="grid grid-cols-2 gap-3 mt-10 md:grid-cols-3 lg:grid-cols-4">
        {products.length ? (
          products.map((product) => (
            <ProductCard item={product} key={product.id} />
          ))
        ) : (
          <>
            <p className="text-xl">No hay productos</p>
          </>
        )}
      </div>
    </section>
  )
}
