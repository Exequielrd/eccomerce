import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export function ProductCard({ item, fixedWidth }) {
  return (
    <article
      className={clsx(
        "h-full group",
        fixedWidth ? "max-w-[400px] w-[60vw]" : "w-full"
      )}
    >
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
