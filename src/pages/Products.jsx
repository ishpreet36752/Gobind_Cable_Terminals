import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { products, productTypes } from '../data/products';

const MATERIALS = ['Copper', 'Aluminium'];

const Products = () => {
  const [query, setQuery] = useState('');
  const [activeMaterial, setActiveMaterial] = useState('');
  const [activeTypes, setActiveTypes] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleType = (type) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.series.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchesMaterial = !activeMaterial || p.material === activeMaterial;
      const matchesType = activeTypes.length === 0 || activeTypes.includes(p.type);
      return matchesQuery && matchesMaterial && matchesType;
    });
  }, [query, activeMaterial, activeTypes]);

  const clearFilters = () => {
    setQuery('');
    setActiveMaterial('');
    setActiveTypes([]);
  };

  const hasFilters = query || activeMaterial || activeTypes.length > 0;

  return (
    <div className="py-8">
      <SEOHead
        title="Products"
        description="Browse Gobind Cable Terminals' full range: copper tubular lugs, aluminium lugs, ring terminals and cable terminals. IS 8309 compliant with sizes from 1.5 mm² to 300 mm²."
        keywords="copper tubular lug, aluminium lug, ring terminal, cable terminal, IS 8309, buy cable lugs India"
        canonicalUrl="https://gobindcable.com/products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse our comprehensive range of high-quality cable terminals
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center text-sm text-red-600 hover:text-red-700"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </button>
            )}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {isFilterOpen && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-60 shrink-0"
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Material filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase mb-3">Material</h4>
                  <div className="space-y-2">
                    {MATERIALS.map((mat) => (
                      <label key={mat} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="material"
                          checked={activeMaterial === mat}
                          onChange={() =>
                            setActiveMaterial(activeMaterial === mat ? '' : mat)
                          }
                          className="rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type filter */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase mb-3">Type</h4>
                  <div className="space-y-2">
                    {productTypes.map((type) => (
                      <label key={type} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeTypes.includes(type)}
                          onChange={() => toggleType(type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg">No products match your search.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <p className="mt-4 text-sm text-gray-500">
              Showing {filtered.length} of {products.length} products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;