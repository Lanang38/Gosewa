import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacts', href: '#contacts' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleLinkClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null);
      setMenuOpen(false);
    }, 500);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black/80 backdrop-blur-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          {/* Logo */}
          <a href="#" className="text-white text-xl font-bold">
            GoSewa
          </a>

          {/* Hamburger Button (Mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="inline-flex flex-col items-center justify-center p-2 w-10 h-10 text-white rounded-lg md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Menu Links */}
          <div
            className={`absolute top-full left-0 w-full md:static md:w-auto transition-all duration-300 ease-in-out ${
              menuOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <ul className="flex flex-col items-start gap-2 px-6 py-4 text-white md:flex-row md:items-center md:p-0 md:gap-8">
              {navigation.map((item, i) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(i)}
                    className={`block py-2 px-3 transition-all duration-300 ease-in-out hover:text-blue-400 ${
                      clickedIndex === i ? 'font-semibold text-blue-400' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
