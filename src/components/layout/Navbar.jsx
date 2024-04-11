import { Button } from "../ui/button"
import { links } from "@/lib/navigation-links"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky z-50 flex items-center justify-between w-full px-10 shadow-sm md:backdrop-blur text-light shadow-light/10">
      <Link href="/" className="text-2xl font-light uppercase">
        <Image src="/logo.png" alt="" width={100} height={100} />
      </Link>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <nav className="items-center hidden gap-5 md:flex">
        <ul className="flex items-center gap-x-5 h-fit">
          {links.map(({ path, name }) => (
            <li
              key={path}
              className="duration-100 hover:border-b border-black/50"
            >
              <Link href={path} className="block">
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="">Get started</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
