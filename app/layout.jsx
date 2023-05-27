import Nav from '@components/Nav.jsx'
import Provider from '@components/Provider'
import '@styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AI Prompts with ChatGPT',
    description: 'Share and Save your Prompts',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}
