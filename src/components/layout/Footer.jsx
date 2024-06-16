import { links } from "@/lib/navigation-links"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border">
      <div className="container pt-24">
        <div className="flex flex-col justify-between md:flex-row">
          <Link href="/">
            <h2 className="text-lg font-bold hover:text-dark">Central Store</h2>
          </Link>
          <nav className="flex gap-10 text-xs text-subtitle">
            {/* <ul className="flex flex-col gap-3 mt-10 md:mt-0 md:items-end">
              {links.map(({ path, name }) => (
                <li
                  key={path}
                  className="duration-100 border-b border-transparent hover:border-dark hover:text-dark w-fit"
                >
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul> */}
            <ul className="flex flex-col gap-3 mt-10 md:mt-0 md:items-end">
              <li className="font-bold">
                <Link href="#">Productos</Link>
              </li>
              <li>
                <Link href="#">Mas vendidos</Link>
              </li>
              <li>
                <Link href="#">Últimos agregados</Link>
              </li>
              <li>
                <Link href="#">Ofertas</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between mt-20 mb-2 text-subtitle">
          <p className="text-xs md:text-sm">©copiright 2024</p>
        </div>
      </div>
    </footer>
  )
}
