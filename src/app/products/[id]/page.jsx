import { supabaseServer } from "@/supabase/supabase"
import VariantSelector from "@/components/product/VariantSelector"
import ProductSlider from "@/components/sections/ProductSlider"
import Image from "next/image"
import BuyButton from "@/components/product/BuyButton"

export default async function page({ params, searchParams }) {
  const { id } = params
  const selectedValues = Object.values(searchParams)
  const supabase = await supabaseServer()
  const { data, error } = await supabase.from("products").select().eq("id", id)
  const product = data[0]
  const noItems = product.stock < 1

  return (
    <section className="container py-12">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center w-full lg:h-[80vh] mb-24">
        <div className="lg:w-1/4">
          <h2 className="mb-3 text-3xl font-semibold">{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div className="flex-grow w-full h-full aspect-square lg:aspect-auto lg:px-10">
          <div className="relative h-full overflow-hidden border rounded-xl bg-medium border-border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end w-full gap-5 lg:w-1/4">
          <div className="flex flex-col w-full gap-5" id="variants">
            {product.variants?.map((variant, index) => (
              <div key={index} className="flex flex-col gap-3 capitalize">
                <p className="text-sm">Select {variant.title}</p>
                <div className="flex gap-3">
                  {variant.values.map((value) => (
                    <VariantSelector
                      title={variant.title}
                      value={value}
                      selected={searchParams[variant.title] === value}
                      key={value}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <p className="mb-3 text-2xl font-bold">
              $
              {product.prices
                ? product.prices[selectedValues.sort().join("")]
                : product.price}
            </p>
            {noItems && (
              <small className="mb-2 text-xs text-subtitle">Sin stock</small>
            )}
            <BuyButton
              product={product}
              price={
                product.prices
                  ? product.prices[selectedValues.sort().join("")]
                  : product.price
              }
              variants={searchParams}
              disabled={
                product.variants?.length > selectedValues.length || noItems
              }
            />
          </div>
        </div>
      </div>
      <div className="mb-10 text-center">
        <h2 className="mb-5 text-sm text-subtitle">Productos relacionados</h2>
        <p className="text-3xl">Estos productos podrían interesarte.</p>
      </div>
      {/* <ProductSlider linkUrl="/products" items={products} /> */}
    </section>
  )
}
