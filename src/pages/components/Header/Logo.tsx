import Image from 'next/image'

export default function LogoName(){
    return (
    <div className="hidden lg:flex">
        <Image width={180} height={180} src={'/images/logo.jpg'} alt={'sas'}></Image>
    </div>
    )
}