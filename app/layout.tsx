import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: 'My Blog',
  description: 'A blog built with Next.js and Nextra'
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
          <Navbar pageMap={await getPageMap()} />
          {children}
          <Footer>
            <p>MIT 2024 © My Blog.</p>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
