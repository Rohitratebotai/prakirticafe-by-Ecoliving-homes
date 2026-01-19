import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#destinations', label: 'DESTINATIONS' },
    { href: '#living', label: 'LIVING' },
    { href: '#experiences', label: 'EXPERIENCES' },
    { href: '#sunshine', label: 'SUNSHINE CLUB' },
    { href: '#offers', label: 'OFFERS' },
    { href: '#gallery', label: 'GALLERY' },
  ];

  return (
    <header className=" w-full bg-white shadow">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center px-6 py-6">
        {/* Left Navigation */}
        <nav className="flex items-center space-x-8 mr-12">
          <a href="destinations" className="text-sm font-semibold tracking-widest hover:text-gray-600 transition">
            DESTINATIONS
          </a>
          <a href="living" className="text-sm font-semibold tracking-widest hover:text-gray-600 transition">
            LIVING
          </a>
          <a href="experience" className="text-sm font-semibold tracking-widest hover:text-gray-600 transition">
            EXPERIENCES
          </a>
        </nav>

        {/* Center Logo */}
        <div className="flex items-center justify-center mx-12">
            <img src={logo} alt="Ecoliving Homes" className="h-12 w- w-auto" />
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center space-x-8 ml-12">
          <a href="sunshine" className="text-sm font-semibold tracking-widest hover:text-gray-600 transition">
            SUNSHINE CLUB
          </a>
          <a href="offers" className="text-sm font-semibold tracking-widest hover:text-gray-600 transition">
            OFFERS
          </a>
          <a href="gallery" className="text-sm font-semibold tracking-widest hover:text-gray-600 transition">
            GALLERY
          </a>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-center">
          <div className="text-xs font-bold tracking-widest mb-1">✈️</div>
          <div className="text-sm font-bold tracking-wide">POSTCARD</div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-800 hover:text-gray-600 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-gray-600"
        >
          <FaTimes />
        </button>

        {/* Logo in Sidebar */}
        <div className="p-6 border-b">
            <img src={logo} alt="Ecoliving Homes" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-widest hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;