import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <main className="flex h-[30vh] lg:h-[60vh] relative justify-center items-center bg-medium">
      <Link href="/products">
        <Image src="/banner.png" alt="" fill className="object-cover" />
      </Link>
    </main>
  )
}
