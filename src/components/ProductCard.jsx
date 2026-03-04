import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Gobind_Products_Catalogue.pdf';
    link.download = 'Gobind_Products_Catalogue.pdf';
    link.click();
  };

  if (!product) return null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.series}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-20">Material:</span>
            <span>{product.material}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-20">Type:</span>
            <span>{product.type}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-20">Standard:</span>
            <span>{product.standard}</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((f) => (
              <span key={f} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                {f}
              </span>
            ))}
          </div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 ml-2 shrink-0"
          >
            <Download className="h-4 w-4 mr-1" />
            Datasheet
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;