/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  },
}

module.exports = nextConfig
