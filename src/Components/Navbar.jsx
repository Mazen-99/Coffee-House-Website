import { useState } from "react"
import { Link } from "react-scroll"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Menu", to: "menu" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-20 w-full bg-[#3B141C] shadow-xl">
      <div className="flex items-center justify-between h-14 px-5 lg:px-14">
        <h1 className="text-4xl font-bold text-white select-none">Coffee ☕</h1>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white px-4 py-2 rounded-full hover:bg-[#F3961C] hover:scale-95 active:scale-90 transition duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-4xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-1/2 max-w-xs bg-[#3B141C] z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-6 pt-15 gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="text-white text-lg px-4 py-2 rounded hover:bg-[#F3961C] transition duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};
export default Navbar