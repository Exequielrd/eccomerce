"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { links } from "@/lib/navigation-links"
import MenuIcon from "../icons/Menu"
import Link from "next/link"
import CloseIcon from "../icons/Close"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="size-10" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </div>
      {isOpen && (
        <nav className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-dark">
          <div
            className="absolute size-10 top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </div>
          <ul className="flex flex-col gap-5 text-2xl">
            {links.map(({ path, name }) => (
              <li
                key={path}
                className="duration-100 hover:border-b border-light/50"
              >
                <Link href={path} className="block">
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Button>Comenzar ahora</Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
