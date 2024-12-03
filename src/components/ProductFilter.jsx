import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const filters = {
  material: ['Copper', 'Aluminum', 'Brass'],
  size: ['14-16 AWG', '12-10 AWG', '8-6 AWG', '4-2 AWG'],
  type: ['Ring', 'Fork', 'Pin', 'Blade'],
  standard: ['UL Listed', 'CE Certified', 'RoHS Compliant']
};

const ProductFilter = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="lg:static fixed inset-y-0 left-0 z-40 w-72 bg-white lg:bg-transparent lg:shadow-none shadow-xl p-4 lg:p-0"
        >
          <div className="flex justify-between items-center lg:hidden mb-4">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button onClick={onClose}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {Object.entries(filters).map(([category, options]) => (
            <div key={category} className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-3">
                {category}
              </h4>
              <div className="space-y-2">
                {options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductFilter;