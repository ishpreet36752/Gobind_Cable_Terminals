import React from 'react';
import ProductSlider from '../components/ProductSlider';
import CategoryGrid from '../components/CategoryGrid';
import CertificationBadges from '../components/CertificationBadges';
import QuoteButton from '../components/QuoteButton';
import AnimatedCounter from '../components/AnimatedCounter';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative">
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
        </div>
      </section>

      {/* Quote Button */}
      <QuoteButton />
    </div>
  );
};

export default Home;