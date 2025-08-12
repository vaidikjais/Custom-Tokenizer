import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tokenization',
  description: 'An immersive, modern, and interactive text tokenizer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-300`}>
        {children}
      </body>
    </html>
  )
}