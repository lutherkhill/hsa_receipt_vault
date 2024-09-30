import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'HSA Receipt Vault- Securely Store and Track HSA Receipts for Future Claims',
  description:
    'Simplify Your Health Savings: Securely Store and Track Your HSA Receipts for Future Claims',
  openGraph: {
    images: '/hsa_receipt_vault.png'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'HSA Receipt Vault- Securely Store and Track HSA Receipts for Future Claims',
    description:
      'Simplify Your Health Savings: Securely Store and Track Your HSA Receipts for Future Claims',
    images: ['https://imgur.com/a/9fVhhEK']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
