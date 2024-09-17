import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './AuthProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>
            <Header />
            {children}
        </AuthProvider>
        </body>
        </html>
    )
}