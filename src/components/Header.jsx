import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const navItems = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Applications", path: "applications" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              }
            }}
          >
            <Logo />
          </ScrollLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              location.pathname === "/" ? (
                <ScrollLink
                  key={item.path}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust for fixed header height
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.path}
                  to={`/#${item.path}`}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </RouterLink>
              )
            ))}
            <RouterLink
              to="/products"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Products
            </RouterLink>

            <a
              href="https://wa.me/919729372668?text=Hello%20there%2C%20I%20am%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-green-700 hover:text-green-800 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                location.pathname === "/" ? (
                  <ScrollLink
                    key={item.path}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 cursor-pointer"
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={item.path}
                    to={`/#${item.path}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50"
                  >
                    {item.title}
                  </RouterLink>
                )
              ))}
              <div className="space-y-2 pt-4 pb-2">
                <RouterLink
                  to="/products"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-bold shadow-md hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Products
                </RouterLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
