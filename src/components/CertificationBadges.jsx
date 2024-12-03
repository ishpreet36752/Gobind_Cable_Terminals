import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';

const badges = [
  {
    id: 1,
    icon: Shield,
    title: 'ISO 9001:2015',
    description: 'Quality Management System'
  },
  {
    id: 2,
    icon: Award,
    title: 'ISO 14001:2015',
    description: 'Environmental Management'
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'OHSAS 18001',
    description: 'Occupational Health & Safety'
  }
];

const CertificationBadges = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Certifications</h2>
          <p className="mt-4 text-lg text-gray-600">
            Committed to maintaining the highest industry standards
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <badge.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;