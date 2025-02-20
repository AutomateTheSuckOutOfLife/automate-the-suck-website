import React, { useState } from 'react';

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
    <div className="flex flex-col items-center gap-2">
      <span className="text-4xl md:text-6xl font-serif">{currentText}</span>
      <button
        onClick={shuffleText}
        className="p-2 hover:text-secondary transition-colors"
        aria-label="Shuffle text"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}