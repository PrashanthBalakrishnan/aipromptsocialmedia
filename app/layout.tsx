import Nav from '@components/Nav'
import AuthContext from '@components/Provider'
import Provider from '@components/Provider'
import '@styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AI prompts',
    description: 'Social media space for AI Prompts for ChatGPT',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </AuthContext>
            </body>
        </html>
    )
}
