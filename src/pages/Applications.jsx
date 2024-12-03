import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Truck, Zap } from 'lucide-react';

const industries = [
  {
    id: 1,
    title: 'Power Distribution',
    icon: Zap,
    description: 'Reliable solutions for power transmission and distribution networks',
    image: 'https://images.unsplash.com/photo-1609881142760-298c2e76725b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Manufacturing',
    icon: Factory,
    description: 'Industrial-grade terminals for manufacturing equipment',
    image: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Construction',
    icon: Building2,
    description: 'Durable components for building electrical systems',
    image: 'https://images.unsplash.com/photo-1581092160607-ee67df11c6d0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Transportation',
    icon: Truck,
    description: 'Specialized terminals for vehicles and transportation systems',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?auto=format&fit=crop&w=800&q=80'
  }
];

const Applications = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Applications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our products serve diverse industries with reliable electrical connection solutions
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <industry.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">{industry.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Map */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Global Projects</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            {/* Add your interactive map component here */}
            <div className="flex items-center justify-center">
              <p className="text-gray-500">Interactive Project Map Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Case Study {index}
                </h3>
                <p className="text-gray-600 mb-4">
                  Success story description showcasing the impact of our solutions.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;