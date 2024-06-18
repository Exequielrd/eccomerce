import { MercadoPagoConfig, Preference } from "mercadopago"

export async function POST(request) {
  const body = await request.json()
  const products = body.map((p) => {
    p.title = p.name
    p.quantity = p.qty
    p.unit_price = Number(p.price)
    return p
  })

  const client = new MercadoPagoConfig({
    accessToken:
      "APP_USR-7123203880970850-061608-5063936faf2ebeff4b7447475db83fdd-285643618",
  })

  const preference = new Preference(client)

  const res = await preference.create({
    body: {
      items: products,
    },
  })
  const preferenceId = res.id

  return Response.json({ preferenceId })
}
