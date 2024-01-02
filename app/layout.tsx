import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/constant/header'
import Footer from './components/constant/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
      <Header />
        <div className='max-w-6xl mx-auto px-4 '>

          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
