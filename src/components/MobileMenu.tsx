import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  items: NavItem[];
};

export default function MobileMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle mounting for SSR compatibility
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Handle escape key press
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Lock body scroll when menu is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap inside menu when open
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    
    const focusableElements = menuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    menuRef.current.addEventListener('keydown', handleTabKey);
    firstElement?.focus();
    
    return () => {
      menuRef.current?.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MenuButton = (
    <button
      ref={buttonRef}
      onClick={toggleMenu}
      className="p-2 flex items-center justify-center rounded-md bg-button-light dark:bg-dark-secondary"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-accent dark:text-dark-text"
        aria-hidden="true"
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
  );

  return (
    <div className="relative md:hidden">
      {MenuButton}
      
      {mounted && createPortal(
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
        >
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className={`fixed right-0 top-0 h-full w-72 bg-background dark:bg-dark-background shadow-xl transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif text-accent dark:text-dark-text">
                  Contents
                </h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md bg-button-light dark:bg-dark-secondary"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-accent dark:text-dark-text"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <nav className="space-y-6">
                {items.map(({ href, label }, index) => (
                  <a
                    key={href}
                    href={href}
                    className="block text-xl text-accent dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}