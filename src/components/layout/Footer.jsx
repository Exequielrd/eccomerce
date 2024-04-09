import { links } from "@/lib/navigation-links"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="container">
      <hr className="mb-20 border-light/20" />
      <div className="flex flex-col justify-between md:items-center md:flex-row">
        <div>
          <Link href="/" className="text-4xl font-light uppercase">
            <Image src="/logo.png" alt="" width={125} height={125} />
          </Link>
          <p className="max-w-[30ch] mt-5 md:mt-10">
            Encuentra tu inspiración. Hazlo realidad.
          </p>
        </div>
        <nav>
          <ul className="flex flex-col gap-3 mt-10 md:mt-0 md:items-end">
            {links.map(({ path, name }) => (
              <li
                key={path}
                className="duration-100 border-b border-transparent hover:border-light/50 w-fit"
              >
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-between mt-20 mb-2 text-light/75">
        <p className="text-xs md:text-sm">©copiright 2024</p>
        <p className="text-xs md:text-sm">@exequielrd</p>
      </div>
    </footer>
  )
}
