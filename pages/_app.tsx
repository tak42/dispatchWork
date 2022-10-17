import type { AppProps } from 'next/app'
import Dashboard from '../components/dashboard/Dashboard'
import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Dashboard {...pageProps} />
}
export default MyApp
