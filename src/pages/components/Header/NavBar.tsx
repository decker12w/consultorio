import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import Links from "./Links";


interface style {
    className?:string
    onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    open: boolean
    ;
}

export default function HeaderLinks({className,onClick, open}:style){
    return (
        <div className="relative sm:flex z-50 md:hidden">  
            <AiOutlineMenu className={`cursor-pointer w-10 z-50 h-10 transition-opacity duration-500 ease-in ${open ? 'opacity-0 hidden': 'opacity-100'}`} onClick={onClick} />
            <AiOutlineClose className={`cursor-pointer w-10 z-50 h-10 transition-opacity duration-500 ease-in ${!open ? 'opacity-0 hidden': 'opacity-100'}`} onClick={onClick} />
            <nav className={`bg-stone-950 rounded shadow-xl translate-x-[-100vw] w-[25vh] h-screen flex flex-col absolute left-0 ${className} transition-transform duration-500 ease-in-out`}>
                <ul className={`flex flex-col items-center gap-8 justify-center h-full w-full`}>
                    <Links title="Home" classNameLine="bg-white" className="text-white hover:text-white" link={"/"}></Links>
                    <Links title="About me" classNameLine="bg-white"  className="text-white" link={"/aboutMe"}></Links >
                    <Links title="Projects" classNameLine="bg-white"  className="text-white" link={""}></Links >
                    <Links title="Skills" classNameLine="bg-white"  className="text-white" link={""}></Links >
                </ul>      
            </nav>
        </div>  
    )
}