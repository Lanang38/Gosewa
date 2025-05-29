import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="GoSewa Logo" className="w-6 h-6" />
          <span className="text-white font-bold text-lg">GoSewa</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-white font-medium text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Testimoni
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 text-white px-4 py-4 space-y-3">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Testimoni
          </a>
          <a href="#" className="block">
            FAQ
          </a>
        </div>
      )}
    </header>
  );
}
