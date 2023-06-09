import { Inter, Carrois_Gothic_SC } from 'next/font/google'
import Header from './components/Header/Header'
import Image from 'next/image'
import Homes from './components/Inicio/Homes'
import Local from './components/LocalTrab/Local'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <div className='flex flex-col'>
            <Header></Header>
            <Homes></Homes>
            <Local></Local>
      </div>
  )
}
