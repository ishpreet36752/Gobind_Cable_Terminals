import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';

const ProductCard = () => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src="https://images.unsplash.com/photo-1635348729252-c0dd6469c337?auto=format&fit=crop&w=800&q=80"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">Copper Lug Terminal</h3>
        <p className="mt-1 text-sm text-gray-500">CT-150 Series</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Size:</span>
            <span className="ml-2">16-14 AWG</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Material:</span>
            <span className="ml-2">Copper</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700">
            <Eye className="h-4 w-4 mr-1" />
            Quick View
          </button>
          <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700">
            <Download className="h-4 w-4 mr-1" />
            Datasheet
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;