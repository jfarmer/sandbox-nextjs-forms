/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
