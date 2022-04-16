import '../styles/globals.css'

import '@DanbiEduCorp/ui/stories/button.css'
import '@DanbiEduCorp/ui/stories/header.css'
import '@DanbiEduCorp/ui/stories/page.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
