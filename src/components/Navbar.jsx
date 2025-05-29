import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">GoSewa</div>

        {/* Menu (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Tentang
          </a>
          <a href="#" className="hover:underline">
            Produk
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="text-sm bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Masuk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-3 space-y-2">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            Tentang
          </a>
          <a href="#" className="block">
            Produk
          </a>
          <a href="#" className="block">
            FAQ
          </a>
          <button className="w-full bg-white text-black px-4 py-2 rounded mt-2">
            Masuk
          </button>
        </div>
      )}
    </header>
  );
}
