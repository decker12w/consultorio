import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Carrois_Gothic_SC } from 'next/font/google'
import { ContextProvider, StateContext } from './context/context';

const Carro = Carrois_Gothic_SC({
  subsets: ['latin'],
  variable: '--font-carro',
  weight: '400'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${Carro.variable} font-sans`}>
    <ContextProvider>
      <Component {...pageProps} />
      </ContextProvider>
    </main>
    )
    
}
