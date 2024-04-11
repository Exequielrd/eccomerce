import Image from "next/image"
import { ProductCard } from "../cards/ProductCard"
import { Button } from "../ui/button"

export function CartModal() {
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
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-dark/50">
      <div className="p-10 bg-light text-dark">
        <header>
          <h4 className="mb-10 text-3xl font-bold uppercase">
            Producto añadido al carrito
          </h4>
        </header>
        <div className="flex">
          <div className="flex items-start gap-5 pr-5 border-r border-black">
            <Image src="/logo.png" alt="item name" width={150} height={150} />
            <div>
              <h5>Item name</h5>
              <p>Color: Black</p>
              <p>Talle: 45</p>
              <p>Cantidad: 1</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="ml-5 border-b border-black/50">
              <h5>Tu carrito</h5>
              <p>5 artículos</p>
              <p>
                Precio total de los productos <span>$180.000</span>
              </p>
              <p>
                <span>Gastos de envío</span> <span>Gratis</span>
              </p>
            </div>
            <div className="ml-5">
              <p className="flex justify-between my-5">
                <b>Total</b> <span>$180.000</span>
              </p>
              <Button variant="secondary" className="w-full">
                Ver carrito
              </Button>
            </div>
          </div>
        </div>
        <footer className="pt-5 mt-5 border-t border-black/10">
          <h4 className="mb-8 font-bold">Combina perfectamente con</h4>
          <div className="flex gap-5">
            {products.map((product) => (
              <ProductCard item={product} key={product.id} />
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
