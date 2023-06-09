import { useStateContext } from '@/pages/context/context';
import React from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

export default function NavMenu() {
  const { open, setOpen } = useStateContext();

  function handleClick(): void {
    setOpen(!open);
  }

  return (
    <span className='z-50 lg:hidden'>
      {open ? <AiOutlineClose  
      onClick={handleClick}
      className={`text-black w-10 h-10 cursor-pointer z-50`}/>  : 
      <AiOutlineMenu
      onClick={handleClick}
      className={`text-white w-10 h-10 cursor-pointer z-50`}
    />  }
    </span>
  );
}