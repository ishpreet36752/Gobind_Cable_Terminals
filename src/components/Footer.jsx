import React from "react";
import { MapPinned, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and positioned below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      <footer className="bg-blue-600 rounded-t-3xl text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-8">
            {/* About Section */}
            <div className="w-full lg:w-1/4">
              <h1 className="text-2xl font-semibold text-white mb-4">
                <span className="underline underline-offset-2">About</span>{" "}
                <span className="font-bold">Gobind Cable Terminals</span>
              </h1>
              <p className="text-gray-200">
                We are a reputed manufacturer and supplier of a diverse range of
                cable lugs for the electrical and engineering industries. Our
                product range includes Tubular Copper Lugs, Ring Pin, Fork Type,
                Aluminium Tubular Lugs, Copper Tubes, Aluminium Lugs, and Copper
                Cable Terminals.
              </p>
            </div>

            {/* Contact Details Section */}
            <div className="w-full lg:w-1/4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Details
              </h3>
              <div className="flex items-center">
                <MapPinned />
                <p className="ml-2">Gobind Cable Terminals</p>
              </div>
              <p className="ml-8">
                Near Kundan Coal Depot, <br />
                Gautam Nagar, Street No. 1, <br />
                Rewari-123401 (Haryana)
              </p>
              <div className="mt-4 flex items-center">
                <Mail />
                <a
                  href="mailto:salesgobindlugs@gmail.com"
                  className="hover:underline ml-2"
                >
                  salesgobindlugs@gmail.com
                </a>
              </div>
              <div className="mt-4 flex items-center">
                <Phone />
                <p className="ml-2">
                  9729372668, <br />
                  9253272668
                </p>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="w-full lg:w-1/4">
              <h1 className="text-xl font-bold text-white mb-4">
                Useful Links
              </h1>
              <div className="text-gray-200 space-y-2">
                <Link to="/">
                  <p>Home</p>
                </Link>
                <Link to="/about">
                  <p>About</p>
                </Link>
                <Link to="/products">
                  {" "}
                  <p>Products</p>
                </Link>
                <Link to="/contact">
                  <p>Contact Us</p>
                </Link>
                <Link to="/">
                  <p>Testimonials</p>
                </Link>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-500 pt-4 flex justify-between">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Gobind Cable Terminals. All
              Rights Reserved.
            </p>
            <p className="text-gray-300 text-sm ml-2">
              Desinged by{" "}
              <a href="https://github.com/KaranSingh36752" alt="Ishpreet">
                Ishpreet.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
