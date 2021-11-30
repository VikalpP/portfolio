import { RouterScrollProvider } from '@moxy/next-router-scroll'
import type { AppProps } from 'next/app'
import { Meta, ThemeProvider } from '../components'

// Order of CSS matters
import '../styles/tachyons.styles.css'
import 'tachyons/css/tachyons.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RouterScrollProvider>
      <ThemeProvider>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </RouterScrollProvider>
  )
}

export default MyApp
