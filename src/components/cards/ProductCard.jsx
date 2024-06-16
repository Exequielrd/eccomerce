import Image from "next/image"
import Link from "next/link"

export function ProductCard({ item }) {
  return (
    <article className="w-full h-full">
      <Link href={`/product/${item.id}`}>
        <div className="relative h-[90%] w-full overflow-hidden border rounded-xl group bg-medium border-border">
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
