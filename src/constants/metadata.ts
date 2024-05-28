export type SharedMetadata = {
  title: string
  description: string
  url: string
  ogImage: {
    width: number
    height: number
    type: string
  }
}

export const sharedMetadata: SharedMetadata = {
  title: 'Nam Khanh Nguyen',
  description: 'Software Engineer, DJ, writer, and minimalist, based in Amsterdam, The Netherlands',
  url: 'https://portfolio-sidebar.vercel.app',
  ogImage: {
    width: 1200,
    height: 630,
    type: 'image/png',
  },
}
