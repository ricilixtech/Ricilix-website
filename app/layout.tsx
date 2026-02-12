import type { Metadata } from 'next'
import { Poppins, Work_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Configure fonts
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading-name',
  display: 'swap',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-name',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ricilix - Business Automation & Digital Solutions',
  description: 'Transform your business with intelligent automation, CRM optimization, and AI-driven solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${workSans.variable}`}>
      <body className="font-body bg-white text-neutral-700">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
