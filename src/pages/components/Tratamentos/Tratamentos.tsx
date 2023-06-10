import React, { useState } from 'react'
import CarrouselItems from './CarrouselItems'


export default function Tratamentos() {
    
    const carrouselData = [{
        title: "Clareamento",
        text: `Consultório odontológico com foco no tratamento humanizado e na saúde do paciente.
        Realizamos procedimentos de competência do clínico geral, além de próteses, implantes, tratamento de canal, 
        clareamento, facetas e muito <mais className="xzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz">xz
        xzzzzzzzzzzzzzzzzzzzzzzzzzz</mais>`
    },
    {
        title: "Facetas",
        text: "Negócio caro"
    },
    {
        title: "Profilaxia",
        text: "Negócio caro"
    },
    {
        title: "Ortondontia",
        text: "Negócio caro"
    },
    {
        title: "Implantes",
        text: "Negócio caro"
    },
    {
        title: "Próteses",
        text: "Negócio caro"
    },
    {
        title: "Hof",
        text: "Negócio caro"
    },
    {
        title: "Canal",
        text: "Negócio caro"
    }]


    return (
        <section className='bg-black h-[auto] flex flex-col gap-10 items-center justify-center border-white border-y-2'>
            <div className='flex justify-center flex-col items-center lg:items-start gap-7 max-w-3xl ml-10'>
                <div className='flex flex-col items-start justify-center gap-5'>
                    <h3 className='text-white text-5xl '>Tratamentos</h3>
                    <p className='text-white text-xl'>Conheça todos nossos tratamentos</p>
                </div>
                {carrouselData.map((element) => (
                    <CarrouselItems title={element.title} text={element.text} ></CarrouselItems>
                ))}
            </div>
            <img className='hidden lg:block h-auto rounded-xl' src={`/images/$`} alt="" />
        </section>
    )
}
