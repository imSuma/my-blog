import { Footer, Layout } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import Link from 'next/link'
import Script from 'next/script'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import 'nextra-theme-blog/style.css'

const THEME_STORAGE_KEY = 'theme'

const themeInitializer = `(() => {
  try {
    const storedTheme = window.localStorage.getItem('${THEME_STORAGE_KEY}')
    const theme = storedTheme === 'dark' ? 'dark' : 'light'
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    root.style.colorScheme = theme
    root.setAttribute('data-theme', theme)
  } catch (_) {
    const root = document.documentElement
    root.classList.add('light')
    root.style.colorScheme = 'light'
    root.setAttribute('data-theme', 'light')
  }
})()`

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
      <body suppressHydrationWarning>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
        <Layout>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
              <Link href="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>Posts</Link>
            </nav>
            <ThemeSwitcher />
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
