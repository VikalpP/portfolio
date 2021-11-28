import type { AppProps } from 'next/app';
import { Meta, ThemeProvider } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
