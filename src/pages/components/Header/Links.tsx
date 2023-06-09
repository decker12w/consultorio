import Link from "next/link"
import { useRouter } from "next/router"

interface link {
    title: string
    link:string
    className?:string,
    classNameLine?:string
}

export default function Links({ title, link, className, classNameLine }: link) {
    const router = useRouter()
    
    return (
        <Link scroll={true} href={link} className={`text-xl text-black relative group ${className} `}>
            {title}
            <span className={`h-[1px] inline-block ${classNameLine} absolute 
            left-0 bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300 ${
                router.asPath === link ? 'w-full' : 'w-0' 
            } `}></span>
        </Link>

    )

}