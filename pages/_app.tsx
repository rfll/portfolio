import '@/styles/globals.css'
import '@/styles/variables.css'
import type { AppProps } from 'next/app'
import PortfolioProvider from '@/providers/PortfolioProvider'

export default function App({ Component, pageProps }: AppProps) {
  return <PortfolioProvider><Component {...pageProps} /></PortfolioProvider>
}
