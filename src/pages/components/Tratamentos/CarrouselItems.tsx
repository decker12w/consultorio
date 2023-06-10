import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

interface Props {
  text: string;
  title: string;
}

export default function CarrouselItems({ text, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCarrousel() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="border-b-2 border-white cursor-pointer w-full bg-black">
      <div className="flex justify-between items-center" onClick={toggleCarrousel}>
        <h4 className="text-white text-xl uppercase">{title}</h4>
        {isOpen ? (
          <AiOutlineArrowUp className="text-white w-10 h-10" />
        ) : (
          <AiOutlineArrowDown className="text-white w-10 h-10" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-white">{text}</p>
        <img className='text-white' src={`/images/${title}.jpg`} alt={`${title}`} />
      </div>
    </div>
  );
}