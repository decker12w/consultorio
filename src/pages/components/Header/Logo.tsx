import Image from 'next/image'


export default function LogoName(){
    return (
    <div className=" lg:static lg:flex lg:items-center lg:justify-center">
        <img src="/images/logo.jpg" alt="logo" className='w-[190px] h-[100px] lg:w-[200] lg:h-[100] '/>
    </div>
    )
}