const products = [
  {
    id: "1",
    name: "Audio Arrogance AuralElite",
    description:
      "Immerse in audio with the Audio Arrogance AuralElite Bluetooth headphones. Enjoy Active Noise Cancellation (ANC) for immersive experience. Indulge in flawless sound.",
    price: "190.00",
    prices: {
      blacknone: "200.00",
      a1black: "250.00",
      a1silver: "220.00",
      nonesilver: "190.00",
    },
    image:
      "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
    variants: [
      { title: "color", values: ["black", "silver"] },
      { title: "noise cancelling", values: ["none", "a1"] },
    ],
  },
]

export { products }
