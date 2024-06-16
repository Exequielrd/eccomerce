import { links } from "@/lib/navigation-links"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  return (
    <header className="sticky z-50 w-full h-16 text-xs shadow-sm text-subtitle">
      <div className="container flex items-center justify-between h-full">
        <div className="lg:w-[40%]">
          <button className="hover:text-dark">Menu</button>
        </div>
        <Link href="/">
          <h2 className="text-lg font-bold hover:text-dark">Central Store</h2>
        </Link>
        <nav className="items-center hidden gap-5 md:flex w-[40%] justify-end">
          <ul className="flex items-center gap-x-5 h-fit">
            {links.map(({ path, name }) => (
              <li
                key={path}
                className="duration-100 hover:border-b border-dark/50 hover:text-dark"
              >
                <Link href={path} className="block">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/cart">Carrito</Link>
      </div>
    </header>
  )
}
