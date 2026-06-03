import { useState } from "react"
import { Link } from "react-scroll"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#3B141C] shadow-xl">
        <div className="flex items-center justify-between h-16 px-5 lg:px-14">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white select-none cursor-pointer"
          >
            Coffee House <span className="text-[#F3961C]">☕</span>
          </motion.h1>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4">
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white px-4 py-2 rounded-full hover:bg-[#F3961C] hover:text-black transition duration-300 ease-in-out font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer - Outside the nav for better stacking */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[1000] lg:hidden"
              onClick={closeMenu}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-full w-64 bg-[#3B141C] z-[1001] shadow-2xl flex flex-col"
            >
              <div className="flex flex-col p-8 pt-20 gap-8">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    className="text-white text-2xl border-b border-white/10 pb-3 hover:text-[#F3961C] transition duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar
