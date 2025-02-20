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

  // Handle sidebar class
  useEffect(() => {
    document.body.classList.toggle('sidebar-open', isOpen);
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-5 right-4 z-50 p-2 text-primary dark:text-dark-accent transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0' : ''
        }`}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
        className={`fixed right-0 top-0 h-full w-64 bg-background dark:bg-dark-background shadow-lg transform transition-transform border-l border-primary/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 space-y-8">
          {/* Mobile Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-accent/60 dark:text-dark-accent/60">Navigation</h3>
            {items.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-primary dark:text-dark-accent hover:text-secondary dark:hover:text-dark-accent/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}