import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Listening Sessions', href: '/listening-sessions' },
  { name: 'Mental Health Awareness', href: '/mental-health-awareness' },
  { name: 'Get Involved', href: '/get-involved' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMenuClose = () => setMobileMenuOpen(false);

  // Close menu on Escape
  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleMenuClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center px-4 sm:px-8 py-4 relative">
      {/* Logo (left) */}
      <div className="flex-none">
        <Link to="/" aria-label="Home" tabIndex={0} className="focus:outline-none">
          <img src="/logo.png" alt="Logo" className="rounded-lg w-16 h-16" />
        </Link>
      </div>
      {/* Hamburger (mobile) */}
      <button
        className="navxl:hidden ml-auto text-white focus:outline-none focus:ring-2 focus:ring-white p-2"
        aria-label="Open menu"
        tabIndex={0}
        onClick={handleMenuToggle}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Nav links (center, desktop) */}
      <ul className="flex-1 hidden navxl:flex justify-center gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                to={link.href}
                className={
                  `relative text-white text-lg font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-white
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:h-0.5 after:w-full after:bg-white after:rounded after:transition-transform after:duration-300 after:origin-left
                  ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 focus:after:scale-x-100'}
                  `
                }
                aria-label={link.name}
                tabIndex={0}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Donate button (right, desktop) */}
      <div className="flex-none hidden navxl:block">
        <Link
          to="/donate"
          aria-label="Donate"
          tabIndex={0}
          className="font-semibold px-6 py-2 rounded-full shadow transform transition-transform transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 hover:shadow-lg hover:bg-indigo-700 active:scale-95"
          style={{ backgroundColor: '#4959e4', color: 'white', fontFamily: 'Inter, sans-serif' }}
        >
          Donate
        </Link>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center navxl:hidden transition-all"
          onClick={handleMenuClose}
        >
          <div
            className="relative flex flex-col items-center w-full"
            style={{ zIndex: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-white p-2"
              aria-label="Close menu"
              tabIndex={0}
              onClick={handleMenuClose}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col gap-8 items-center mt-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white text-2xl font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-white/10 transition-colors duration-200"
                    aria-label={link.name}
                    tabIndex={0}
                    onClick={handleMenuClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/donate"
                  className="font-semibold px-6 py-2 rounded-full shadow bg-[#6d79e6] text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-700 transition-colors duration-200"
                  aria-label="Donate"
                  tabIndex={0}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={handleMenuClose}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 