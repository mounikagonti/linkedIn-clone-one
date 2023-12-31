/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'static.vecteezy.com',
      'plus.unsplash.com',
      'media.licdn.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
}

module.exports = nextConfig
