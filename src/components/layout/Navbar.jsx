import { links } from "@/lib/navigation-links"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky z-50 w-full text-xs shadow-sm text-subtitle">
      <div className="container flex items-center justify-between h-full py-2">
        <Link href="/">
          <Image src="/cs-logo.png" alt="logo" width={125} height={100} />
        </Link>
        <div className="md:hidden text-dark">
          <MobileMenu />
        </div>
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
      </div>
    </header>
  )
}
