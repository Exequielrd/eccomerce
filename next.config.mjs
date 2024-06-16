/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next.medusajs.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
