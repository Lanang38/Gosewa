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
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          <a href="#">
            <img src="/logo2.png" className="h-5" alt="Logo" />
          </a>

          {/* Toggle Button */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center p-2 w-10 h-10 text-white rounded-lg md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {/* Menu */}
          <div
            className={`absolute top-full left-0 w-full md:static md:w-auto transition-all duration-300 ease-in-out ${
              menuOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <ul
              className={`flex flex-col items-start gap-2 px-6 py-4 bg-black/80 backdrop-blur-md text-white md:flex-row md:bg-transparent md:items-center md:p-0 md:gap-8`}
            >
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
