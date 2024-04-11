import Image from "next/image"
import Link from "next/link"

export function ProductCard({ item }) {
  return (
    <Link href={`/product/${item.id}`}>
      <article className="w-full h-[300px] group">
        <div className="w-full h-[70%] relative mb-3 bg-light/10  overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain group-hover:hidden"
          />
          <Image
            src={item.secondary_img}
            alt={item.name}
            fill
            className="hidden object-contain group-hover:flex"
          />
          <p className="absolute p-1 text-xs -bottom-1 group-hover:bottom-1 bg-light text-dark left-2">
            ${item.price}
          </p>
        </div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </article>
    </Link>
  )
}
