import React from 'react'
import DepoimentosItems from './DepoimentosItems'


export default function Depoimentos() {
    return (
        <section className='flex flex-col justify-center items-center gap-20'>
            <div className='flex flex-col items-center justify-center relative mt-16'>
                <span className='h-[1px] inline-block absolute top-0.5 bg-black w-[70%]'></span>
                <h5 className='text-4xl font-carro'>Depoimentos</h5>
            </div>
            <div className='flex gap-10'>
                <DepoimentosItems></DepoimentosItems>
                <DepoimentosItems></DepoimentosItems>
                <DepoimentosItems></DepoimentosItems>
            </div>
            <div className='flex self-end gap-5 mr-10'>
                <h6 className='text-xl underline'>Escreva um comentário</h6>
                <h6 className='text-xl underline'>Saiba mais</h6>
            </div>
        </section>
    )
}
