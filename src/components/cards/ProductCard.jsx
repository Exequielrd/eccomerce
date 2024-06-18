import Image from "next/image"
import Link from "next/link"

export function ProductCard({ item }) {
  return (
    <article className="max-w-[400px] w-[80vw] h-full group">
      <Link href={`/products/${item.id}`}>
        <div className="relative h-[90%] w-full overflow-hidden border rounded-xl group bg-medium border-border group-hover:border-subtitle/50">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between gap-5 pt-5 text-sm text-subtitle h-[10%]">
          <p className="truncate">{item.name}</p>
          <p>${item.price}</p>
        </div>
      </Link>
    </article>
  )
}
