"use client"
import { useRouter } from "next/navigation"
import clsx from "clsx"

export default function VariantSelector({ selected, value, title }) {
  const router = useRouter()

  const updateSearchParams = () => {
    const url = new URL(window.location)

    url.searchParams.set(title, value)
    router.push(url.toString())
  }

  return (
    <button
      onClick={updateSearchParams}
      className={clsx(
        "flex-grow px-3 py-3 text-xs text-center border rounded-lg r bg-medium capitalize",
        selected ? "border border-blue-400" : "border-borde"
      )}
    >
      {value}
    </button>
  )
}
