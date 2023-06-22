import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400' , subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Diwberg',
  description: 'Portfolio to demonstrate my knowledges',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${roboto.className} bg-zinc-800 text-zinc-100`}>{children}</body>
    </html>
  )
}
