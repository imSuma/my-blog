import { Footer, Layout } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import Link from 'next/link'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: 'Suma Murikipudi - Personal Blog',
  description: 'Personal blog by Suma Murikipudi - Full Stack Developer'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <Head />
      <body>
        <Layout>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '2rem' }}>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
              <Link href="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>Posts</Link>
            </nav>
          </div>
          {children}
          <Footer>
            <p>© 2025 Suma Murikipudi</p>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
