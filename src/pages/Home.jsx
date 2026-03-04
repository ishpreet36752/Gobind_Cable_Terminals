import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import CertificationBadges from '../components/CertificationBadges';
import QuoteButton from '../components/QuoteButton';
// AnimatedCounter is now used inside Hero
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import About from './About';
import Applications from './Applications';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="relative">
      <SEOHead
        title="Cable Lugs & Terminals Manufacturer | Rewari, India"
        description="Gobind Cable Terminals – manufacturer of copper lugs, aluminium lugs, ring terminals and cable terminals in Rewari, Haryana. IS 8309 compliant. 25+ years of experience."
        keywords="copper lugs, aluminium lugs, cable terminals, ring terminals, cable lugs manufacturer, Rewari, Haryana, IS 8309"
        canonicalUrl="https://gobindcable.com/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Manufacturer",
          "name": "Gobind Cable Terminals",
          "url": "https://gobindcable.com/",
          "logo": "https://gobindcable.com/gobind-icon.svg",
          "image": "https://gobindcable.com/gobind-icon.svg",
          "description": "Manufacturer of high-quality copper & aluminium lugs, ring terminals, and cable terminals in India.",
          "telephone": [
            "+91-9729372668",
            "+91-9253272668"
          ],
          "email": "salesgobindlugs@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Kundan Coal Depot, Gautam Nagar, Street No.1",
            "addressLocality": "Rewari",
            "addressRegion": "Haryana",
            "postalCode": "123401",
            "addressCountry": "IN"
          }
        }}
      />
      {/* Hero Section */}
      <Hero />

      {/* Quick Navigation */}
      <section >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Product Range
            </h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive selection of high-quality electrical components
            </p>
          </motion.div>
          <CategoryGrid />
        </div>
      </section>

      {/* Certifications */}
      <CertificationBadges />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Applications Section */}
      <section id="applications">
        <Applications />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Catalogue Download */}
      <QuoteButton />
    </div>
  );
};

export default Home;