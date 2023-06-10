import React from 'react'
import {AiFillStar} from 'react-icons/ai'

export default function DepoimentosItems() {
  return (
    <div className='flex flex-col items-start max-w-sm gap-5'>
                <div className='flex justify-center items-center gap-2'>
                    <div className='flex justify-center items-center'>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                    </div>
                    <p>um mês atrás</p>
                </div>
                <p className='text-left'>“A dra Maria Clara é uma dentista top de linha! Ela é muito competente e super atenciosa com os pacientes.
                    Quando eu fui lá, ela fez questão de me deixar bem confortável durante todo o tratamento.
                    Ela é super competente e tem um jeito super tranquilo de fazer as coisas. Além disso, ela é muito
                    querida e
                    cuidadosa, o que me fez sentir em casa lá no consultório.
                    Eu super recomendo a Maria Clara para quem precisa de uma dentista incrível e de confiança!”</p>
                <h6>-Fernando</h6>
        </div>
  )
}
