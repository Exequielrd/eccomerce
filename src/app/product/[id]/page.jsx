import { CartModal } from "@/components/modals/CartModal"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function page() {
  const product = {
    image: "/logo.png",
    secondary_img: "/logo.png",
    images: ["/logo.png"],
    name: "Nike shoe",
    category: "Shoes",
    description: "Shoes asdasd",
    price: 100,
    id: 1,
  }

  return (
    <section className="w-full">
      <div className="flex">
        <div className="grid w-2/3 grid-cols-1 lg:grid-cols-2">
          {product.images.map((image, index) => (
            <div className="relative w-full h-full aspect-square" key={index}>
              <Image src={image} alt={product.name} fill />
            </div>
          ))}
          {product.images.map((image, index) => (
            <div className="relative w-full h-full aspect-square" key={index}>
              <Image src={image} alt={product.name} fill />
            </div>
          ))}
          {product.images.map((image, index) => (
            <div className="relative w-full h-full aspect-square" key={index}>
              <Image src={image} alt={product.name} fill />
            </div>
          ))}
          {product.images.map((image, index) => (
            <div className="relative w-full h-full aspect-square" key={index}>
              <Image src={image} alt={product.name} fill />
            </div>
          ))}
        </div>
        <div className="relative w-1/3 border-l text-light border-light/10">
          <div className="sticky top-0 flex flex-col justify-between h-screen p-10 bg-dark">
            <div>
              <div className="flex justify-between">
                <p>{product.category}</p>
                <span>5 stars</span>
              </div>
              <h2 className="my-5 text-4xl font-bold">{product.name}</h2>
              <p className="font-semibold ">${product.price}</p>
              <p className="mt-10">{product.description}</p>
            </div>
            <div>
              <Button className="w-full">Agregar al carrito</Button>
              <p className="my-5">ENVÍO GRATIS A PARTIR DE $130,000</p>
              <p>
                DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN
                PLAZO DE 60 DÍAS
              </p>
            </div>
          </div>
        </div>
        {/* <CartModal /> */}
      </div>
    </section>
  )
}
