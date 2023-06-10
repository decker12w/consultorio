import { Inter, Carrois_Gothic_SC } from 'next/font/google'
import Header from './components/Header/Header'
import Image from 'next/image'
import Homes from './components/Inicio/Homes'
import Local from './components/LocalTrab/Local'
import Tratamentos from './components/Tratamentos/Tratamentos'
import Depoimentos from './components/Depoimentos/Depoimentos'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <div className='flex flex-col'>
            <Header></Header>
            <Homes></Homes>
            <Local></Local>
            <Tratamentos></Tratamentos>
            <Depoimentos></Depoimentos>
      </div>
  )
}
