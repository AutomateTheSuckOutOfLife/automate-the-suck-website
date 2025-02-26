import React, { useState, useEffect } from 'react';

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  items: NavItem[];
};

export default function MobileMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Simple Toggle Button - Just three lines */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 flex items-center justify-center transition-all duration-300"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 text-accent dark:text-[#FFCEF1] hover:text-primary dark:hover:text-[#FFE5F4] transition-colors ${isOpen ? 'text-primary dark:text-[#FFE5F4]' : ''}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen 
              ? "M6 18L18 6M6 6l12 12" 
              : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            }
          />
        </svg>
      </button>

      {/* Simple Menu Panel - Just content sliding in from right */}
      <div
        className={`fixed right-0 top-0 h-full w-72 bg-background/95 dark:bg-dark-background/98 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          zIndex: 50,
          paddingTop: '80px' // Space for the header
        }}
      >
        <div className="p-8 pt-12">
          <h2 className="text-2xl font-serif mb-8 text-accent dark:text-[#FFCEF1]">Contents</h2>
          {/* Navigation */}
          <nav className="space-y-6">
            {items.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-xl text-accent dark:text-[#FFCEF1] hover:text-primary dark:hover:text-[#FFE5F4] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}