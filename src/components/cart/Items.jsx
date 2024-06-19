"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import DeleteIcon from "../icons/Delete"
import Image from "next/image"

export default function Items() {
  const router = useRouter()
  let products = []

  if (typeof window !== "undefined") {
    products = JSON.parse(localStorage.getItem("products"))
  }

  function handleChange(value, index) {
    products[index].qty = value
    localStorage.setItem("products", JSON.stringify(products))
    router.refresh()
  }

  function deleteItem(index) {
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    router.refresh()
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[250px]">Producto</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  alt={product.name}
                />
                <p>{product.name}</p>
                {product.variants.length && (
                  <p className="my-2 text-subtitle whitespace-nowrap">
                    <span>Variantes: </span>
                    {Object.values(product.variants).map((variant, index) => (
                      <span
                        key={index}
                        className="p-1 mx-1 border rounded-lg bg-medium border-border"
                      >
                        {variant}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => deleteItem(index)}
                  className="w-6 text-subtitle hover:text-dark aspect-square"
                >
                  <DeleteIcon />
                </button>
                <Select
                  onValueChange={(value) => handleChange(value, index)}
                  defaultValue={product.qty}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={product.qty} />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: product.stock }, (_, index) => (
                      <SelectItem value={index + 1} key={index}>
                        {index + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell className="text-right">
              ${(product.qty * product.price).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
