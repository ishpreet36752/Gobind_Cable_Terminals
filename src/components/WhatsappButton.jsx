import React from "react";
import {motion} from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
const WhatsappButton = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <a
        href="https://wa.me/919729372668?text=Hello%20there%2C%20I%20am%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-green-700 hover:text-green-800 transition-colors"
      >
        <IoLogoWhatsapp />
      </a>
    </motion.div>
  );
};

export default WhatsappButton;
