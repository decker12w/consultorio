import React from 'react'

export default function Local() {
  return (
      <section className='bg-black h-[900px] mt-16 flex items-center justify-center' id='local'>
          <div className=' flex flex-col justify-center items-center lg:flex-row gap-5 '>
            <div className='max-w-[350px] md:max-w-[500px] flex items-center justify-center'>
              <img className='border-white border-2 w-full h-auto  lg:w-auto lg:h-auto' src="/images/consulL.jpg" alt="Imagem do consultório odontológico" />
            </div>
            <article className='flex flex-col justify-center items-center gap-5 max-w-[350px] md:max-w-[500px] lg:max-h-[600px] lg:max-w-[470px]'>
              <h2 className='text-white text-6xl'>Consultório Equipado</h2>
              <p className='text-white text-left'>Um consultório odontológico moderno é meticulosamente equipado para proporcionar o mais alto nível de 
                cuidados dentários aos pacientes. Cada elemento do ambiente é cuidadosamente selecionado e 
                projetado para garantir conforto, segurança e eficiência durante os procedimentos dentários.</p>
            </article>
          </div>
    </section>
  )
}
