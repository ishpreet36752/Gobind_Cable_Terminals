import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Copper Lugs',
    image: 'src/images/copperLugs.png',
    description: 'High-conductivity copper terminals for reliable connections'
  },
  {
    id: 2,
    title: 'Aluminum Terminals',
    image: 'src/images/aluminiumLugs.jpeg',
    description: 'Lightweight solutions for power distribution'
  },
  {
    id: 3,
    title: 'Ring Terminals',
    image: 'src/images/ringTerminal.jpg',
    description: 'Secure connections for various applications'
  },
  {
    id: 4,
    title: 'Custom Solutions',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
    description: 'Tailored to your specific requirements'
  }
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ y: -10 }}
          className="group relative overflow-hidden rounded-lg shadow-lg"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{category.description}</p>
            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-white text-sm font-medium"
            >
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;