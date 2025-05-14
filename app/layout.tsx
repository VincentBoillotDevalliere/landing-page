import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interactive courses landing page',
  description: 'A landing page for interactive courses extension for VSCode',
  authors: [
    {
      name: 'VincentBoillotDevalliere',
      url: 'https://github.com/VincentBoillotDevalliere'
    }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
