import React from 'react'
import Image from 'next/image'

export default function Homes() {
  return (
    <section className='flex flex-col-reverse items-center lg:flex-row lg:justify-center mt-7 lg:gap-24' id='home'>
    <div className='max-w-[90%] lg:max-w-[627px] flex flex-col justify-center items-center mt-12' >
            <h1 className='text-4xl lg:text-6xl  mb-14 text-left'>Uma excelente experiencia Odontológica</h1>
            <p className='text-sm lg:text-base mb-9 text-left'>Consultório odontológico com foco no tratamento humanizado e na saúde do paciente.
Realizamos procedimentos de competência do clínico geral, além de próteses, implantes, tratamento de canal, 
clareamento, facetas e muito mais.</p>
            <button className='w-full h-16 bg-black text-white rounded-2xl font-carro lowercase'>Marque o seu Horário</button>
        </div>
        <div className='lg:max-w-[625px] lg:max-h-[825px] relative'>
            <img src="/images/Dr.jpeg" className='object-cover object-center w-[80vw] h-auto lg:w-[350px] lg:h-[550px] rounded-2xl border-black border-2' alt="" />
          <span className='hidden lg:block lg:w-[350px] lg:h-[550px] absolute border-black border-2 rounded-2xl top-14 left-32 -z-10'></span>
      </div>
    </section>
  )
}
