"use client"
import { useState } from "react"
import { links } from "@/lib/navigation-links"
import MenuIcon from "../icons/Menu"
import Link from "next/link"
import CloseIcon from "../icons/Close"
import { useRouter } from "next/navigation"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  function navigate(path) {
    setIsOpen(false)
    router.push(path)
  }
  return (
    <>
      <div className="size-10" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </div>
      {isOpen && (
        <nav className="fixed top-0 left-0 z-50 flex w-full h-screen px-10 pt-24 bg-light">
          <div
            className="absolute size-10 top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </div>
          <ul className="flex flex-col gap-5 text-xl">
            {links.map(({ path, name }) => (
              <li
                key={path}
                onClick={() => navigate(path)}
                className="duration-100 hover:border-b border-dark/50"
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
