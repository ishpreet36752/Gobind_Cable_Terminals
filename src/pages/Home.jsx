import ProductSlider from '../components/ProductSlider';
import CategoryGrid from '../components/CategoryGrid';
import CertificationBadges from '../components/CertificationBadges';
import QuoteButton from '../components/QuoteButton';
import AnimatedCounter from '../components/AnimatedCounter';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      <SEOHead
        title="Cable Lugs & Terminals Manufacturer | Rewari, India"
        description="Gobind Cable Terminals – manufacturer of copper lugs, aluminium lugs, ring terminals and cable terminals in Rewari, Haryana. IS 8309 compliant. 25+ years of experience."
        keywords="copper lugs, aluminium lugs, cable terminals, ring terminals, cable lugs manufacturer, Rewari, Haryana, IS 8309"
      />
      {/* Hero Slider */}
      <ProductSlider />

      {/* Quick Navigation */}
      <section className="py-16">
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

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Setting the standard in electrical component manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCounter end={50} title="Product Variants" />
            <AnimatedCounter end={20} title="Industries Served" />
            <AnimatedCounter end={25} title="Years of Excellence" />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue Download */}
      <QuoteButton />
    </div>
  );
};

export default Home;