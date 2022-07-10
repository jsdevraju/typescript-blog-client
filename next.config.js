// next.config.js
module.exports = {
  images: {
    domains: ['source.unsplash.com', 'firebasestorage.googleapis.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}