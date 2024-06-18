"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { useEffect } from "react"

export default function DeliveryForm() {
  const router = useRouter()
  const deliveryPrices = {
    normal: "2000",
    flex: "3500",
  }

  function setDelivery(value) {
    localStorage.setItem("delivery-price", deliveryPrices[value])
    router.refresh()
  }

  function nextStep(e) {
    e.preventDefault()
    router.push("?step=payment")
  }

  useEffect(() => {
    localStorage.setItem("delivery-price", deliveryPrices.normal)
    router.refresh()
  }, [])

  return (
    <form className="grid grid-cols-2 gap-5" onSubmit={nextStep}>
      <div className="col-span-2">
        <Select defaultValue="normal" onValueChange={setDelivery}>
          <SelectTrigger>
            <SelectValue placeholder="Envío" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal a domicilio </SelectItem>
            <SelectItem value="flex">Flex a domicilio</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button>Continuar</Button>
    </form>
  )
}
