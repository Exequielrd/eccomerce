/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lteckafshcppbymoueef.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
