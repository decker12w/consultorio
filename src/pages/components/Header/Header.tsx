import { MdDarkMode } from "react-icons/md";
import HeaderLinks from "./HeaderLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  function menu() {
    setMenuOpen(!menuOpen)
  }


  return (
    <header className={`bg-black flex flex-row p-4 flex-wrap justify-center lg:justify-between lg:px-32
     items-center sticky top-0 w-full z-50`}>
      <Logo></Logo>
      <div className="flex w-full lg:w-auto justify-between md:justify-between items-center">
          <div className="hidden md:block">
              <HeaderLinks />
          </div>

            <NavBar open={menuOpen} onClick={menu} className={`${menuOpen ? 'translate-x-[-4vw]' : ''}`}></NavBar>

            <div className={`transition-all duration-200 ease-in z-20 
                hover:text-white cursor-pointer rounded-full hover:bg-black p-2`}>
                <MdDarkMode className="w-9 h-9" />
            </div>
      </div>
    </header>
  )
}