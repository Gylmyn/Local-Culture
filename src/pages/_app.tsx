import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react'
import { Poppins } from 'next/font/google'


// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


export default function App({ Component, pageProps }: AppProps) {
  return <NextUIProvider>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  </NextUIProvider>
}
