import { useStateContext } from "@/pages/context/context";
import Links from "./Links";

interface MenuItem {
    link: string;
    title: string;
  }
  

interface style {
    className?:string
    // onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    data: MenuItem[]
    ;
}

export default function NavLinks({className, data}:style){
  const {open} = useStateContext();
  const desktop = `lg:translate-x-0 lg:w-auto lg:bg-transparent lg:static lg:flex lg:h-full lg:flex-row `
  const mobile = `flex flex-col absolute justify-center items-center 
  bg-white h-screen w-full top-0 left-0 transition-transform duration-200 ease-in-out ${open ? 'translate-x-0' : 'translate-x-[100vw] '}`

    return (
      <nav className={`${mobile}  ${desktop} `}>
        <ul className={`${mobile} ${desktop} gap-7 lg:gap-5`}>
          {data.map((item, index) => (
            <li className="" key={index}>
              <Links classNameLine="bg-black lg:bg-white" className="text-2xl lg:text-white font-carro lowercase lg:text-lg" title={item.title} link={item.link} />
            </li>
          ))}
        </ul>
      </nav>
    )
}