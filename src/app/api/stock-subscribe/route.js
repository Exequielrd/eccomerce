import { supabaseRoute } from "@/supabase/supabase"

export async function POST(request) {
  const formData = await request.formData()
  const email = formData.get("email")
  const id = formData.get("id")
  const name = formData.get("name")
  const { origin } = new URL(request.url)

  const supabase = await supabaseRoute()
  const { data, error } = await supabase
    .from("stock-subscribers")
    .insert({ email, product_id: id, product_name: name })

  return Response.redirect(new URL(origin))
}
