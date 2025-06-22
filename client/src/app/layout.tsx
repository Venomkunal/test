import Navbar from './component/navbar'
import Footer from './component/footer'
import { Metadata } from 'next'
export const metadata:Metadata = {
  title: { default: 'Indian Bazaar Guy - Your One-Stop Shop for All Your Needs',
    template: '%s | Indian Bazaar Guy' },
  keywords: 'e-commerce, online shopping, Indian Bazaar Guy, buy online, shop online, products, shopping',
  authors: [{ name: 'Indian Bazaar Guy', url: 'test-ve1s.vercel.app' }],
  creator: 'Indian Bazaar Guy',
  openGraph: {
    title: 'Indian Bazaar Guy',
    description: 'Welcome to Indian Bazaar Guy - Your one-stop shop for all your needs!. Explore our wide range of products and enjoy a seamless shopping experience.',
    url: 'test-ve1s.vercel.app',
    siteName: 'Indian Bazaar Guy',
    images: [
      {
        url: '/images/logo.png',
        width: 200,
        height: 200,
        alt: 'Indian Bazaar Guy Logo',
      },  ]},
  description: 'Welcome to Indian Bazaar Guy - Your one-stop shop for all your needs!. Explore our wide range of products and enjoy a seamless shopping experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
          </main>
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  )
}
