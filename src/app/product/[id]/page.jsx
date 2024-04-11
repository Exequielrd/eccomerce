import { Button } from "@/components/ui/button"
import Image from "next/image"

function Modal() {
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
            <article>
              <h5>asd</h5>
            </article>
          </div>
        </footer>
      </div>
    </div>
  )
}

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
        <Modal />
      </div>
    </section>
  )
}
