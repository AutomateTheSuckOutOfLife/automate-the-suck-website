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

  // Handle sidebar class and push effect
  useEffect(() => {
    document.body.classList.toggle('sidebar-open', isOpen);
    document.body.style.transition = 'margin-right 300ms ease-in-out';
    document.body.style.marginRight = isOpen ? '288px' : '0';
    
    return () => {
      document.body.classList.remove('sidebar-open');
      document.body.style.marginRight = '0';
    };
  }, [isOpen]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-50 p-2 text-primary dark:text-dark-accent transition-all duration-300 ${
          isOpen ? 'mr-[288px]' : ''
        }`}
        aria-label="Toggle menu"
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
            d={isOpen 
              ? "M6 18L18 6M6 6l12 12" 
              : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            }
          />
        </svg>
      </button>

      {/* Menu Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-72 bg-background dark:bg-dark-background transition-transform duration-300 ease-in-out border-l border-primary/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          position: 'fixed',
          right: isOpen ? '0' : '-288px',
          transition: 'right 300ms ease-in-out'
        }}
      >
        <div className="p-8 pt-24">
          {/* Navigation */}
          <nav className="space-y-8">
            {items.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-2xl font-serif text-primary dark:text-dark-accent hover:text-secondary dark:hover:text-dark-accent/80 transition-colors relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}