/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'yourijanssen.online',
        defaultLocale: 'en',
      },
      {
        domain: 'yourijanssen.nl',
        defaultLocale: 'nl',
      },
    ],
  },
};

module.exports = nextConfig
