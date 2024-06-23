import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function StockSubscribe({ product }) {
  return (
    <form
      action="/api/stock-subscribe"
      method="POST"
      encType="multipart/form-data"
      className="flex flex-col gap-3 mb-3"
    >
      <input type="text" defaultValue={product.id} name="id" hidden />
      <input type="text" defaultValue={product.name} name="name" hidden />
      <small className="text-xs text-subtitle">Sin stock</small>
      <Input type="email" placeholder="Email" name="email" required />
      <small className="text-xs">
        Ingresa tu email, y te avisaremos cuando haya stock
      </small>
      <Button>Enviar</Button>
    </form>
  )
}
