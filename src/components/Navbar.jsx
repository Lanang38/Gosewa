import { useState } from "react";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 ">
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#">
                <img src="src\assets\logo2.png" className="h-5" alt="Logo" />
                </a>
                <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
                <div className={`${menuOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    {navigation.map((item) => (
                    <li key={item.name}>
                        <a
                        href={item.href}
                        className="block py-2 px-3 text-gray-900 md:text-white rounded-sm hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
}

export default Navbar;