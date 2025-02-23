import React, { useState } from 'react';
import hoverIcon from '../assets/hover.svg?url';

const textOptions = [
  'with Figma',
  'for the classroom',
  'by hand',
  'with bolt'
];

export default function ShuffleText() {
  const [currentText, setCurrentText] = useState(textOptions[0]);

  const shuffleText = () => {
    const currentIndex = textOptions.indexOf(currentText);
    const nextIndex = (currentIndex + 1) % textOptions.length;
    setCurrentText(textOptions[nextIndex]);
  };

  return (
    <div className="flex flex-col w-full gap-8">
      <div>
        <a 
          href="/projects" 
          className="group transition-colors block"
        >
          <span className="text-4xl md:text-6xl font-serif underline decoration-2 underline-offset-8 text-primary group-hover:text-secondary transition-colors whitespace-nowrap">{currentText}</span>
        </a>
      </div>
      <div className="text-accent group flex justify-center w-full mt-4">
        <button
          onClick={shuffleText}
          className="p-2 group-hover:text-[#E2C42B] transition-all duration-300"
          aria-label="Shuffle text"
        >
          <img 
            src={hoverIcon} 
            alt="Magic wand with sparkles" 
            className="w-16 h-16 transition-all duration-300 group-hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
}