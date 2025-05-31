import { useState } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacts", href: "#contacts" },
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
    <header className="absolute top-0 left-0 w-full z-50">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#">
            <img src="src/assets/logo2.png" className="h-5" alt="Logo" />
          </a>

          {/* Toggle button with animated hamburger */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center p-2 w-10 h-10 text-white rounded-lg md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Navigation menu */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className="absolute right-4 top-16 w-48 font-medium flex flex-col p-4 mt-2 
                         rounded-lg bg-white/10 backdrop-blur-md text-white 
                         md:static md:flex-row md:space-x-8 md:p-0 md:mt-0 
                         md:bg-transparent md:backdrop-blur-0 md:w-auto"
            >
              {navigation.map((item, i) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(i)}
                    className={`block py-2 px-3 transition-all duration-300 ease-in-out hover:text-blue-500 ${
                      clickedIndex === i ? "clicked" : ""
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
