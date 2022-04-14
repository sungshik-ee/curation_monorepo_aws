import '../styles/globals.css'
import '@curation/ui/stories/button.css'
import '@curation/ui/stories/header.css'
import '@curation/ui/stories/page.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
