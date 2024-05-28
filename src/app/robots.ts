export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://portfolio-sidebar.vercel.app/sitemap.xml',
    host: 'https://portfolio-sidebar.vercel.app',
  }
}
