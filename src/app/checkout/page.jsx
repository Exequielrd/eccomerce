import AddressForm from "@/components/checkout/AddressForm"
import DeliveryForm from "@/components/checkout/DeliveryForm"
import PaymentForm from "@/components/checkout/PaymentForm"
import Summary from "@/components/checkout/Summary"

export default function page({ searchParams }) {
  const { step } = searchParams
  return (
    <section className="container min-h-[50vh] my-24 flex flex-col-reverse lg:flex-row gap-10">
      <div className="flex-grow">
        <h2 className="mb-10 text-3xl font-semibold">Dirección de envío</h2>
        {!step && <AddressForm />}
        <hr className="my-5" />
        <h2 className="mb-10 text-3xl font-semibold">Envío</h2>
        {step === "delivery" && <DeliveryForm />}
        <hr className="my-5" />
        <h2 className="mb-10 text-3xl font-semibold">Pago</h2>
        {step === "payment" && <PaymentForm />}
      </div>
      <Summary />
    </section>
  )
}
