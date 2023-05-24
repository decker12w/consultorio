import { Inter } from 'next/font/google'
import Header from './components/Header/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='flex flex-col'>
          <Header></Header>
      <main className={`flex justify-center mt-0 md:mt-48 lg:mt-48 w-full`}>
  
      </main>
    </div>
  )
}
