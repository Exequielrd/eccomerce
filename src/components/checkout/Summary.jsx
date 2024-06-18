import DeliveryPrice from "../cart/DeliveryPrice"
import Subtotal from "../cart/Subtotal"
import Total from "../cart/Total"

export default function Summary() {
  return (
    <div className="lg:w-1/3">
      <h2 className="mb-10 text-3xl font-medium">Resumen</h2>
      <hr className="my-5" />
      <p className="flex items-center justify-between text-sm text-subtitle">
        <span>Subtotal</span>
        <Subtotal />
      </p>
      <p className="flex items-center justify-between mt-3 text-sm text-subtitle">
        <span>Envío</span>
        <DeliveryPrice />
      </p>
      <hr className="my-5" />
      <p className="flex items-center justify-between mt-3 text-sm text-subtitle">
        <span>Total</span>
        <Total />
      </p>
      <hr className="my-5" />
    </div>
  )
}
