import { motion } from 'framer-motion';
import { Award, Users, History, Factory, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import manufacturingImg from '../images/manufacturing.jpeg';

const About = () => {
  return (
    <div className="py-16">
      <SEOHead
        title="About Us"
        description="Learn about Gobind Cable Terminals – established in 1998 in Rewari, Haryana. Manufacturer of IS 8309 compliant copper and aluminium cable lugs serving 20+ industries."
        keywords="about Gobind Cable Terminals, cable lug manufacturer Rewari, copper lug India, IS 8309"
      />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Gobind Cable Terminals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading manufacturer of high-quality cable terminals and electrical components since 1998
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide innovative and reliable electrical connection solutions that meet the highest
              industry standards while ensuring customer satisfaction and environmental responsibility.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in electrical connectivity solutions, recognized for quality,
              innovation, and commitment to sustainable practices.
            </p>
          </motion.div>
        </div>

        {/* Manufacturing Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={manufacturingImg}
            alt="Gobind Cable Terminals manufacturing facility"
            className="w-full h-72 object-cover"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '1998', title: 'Company Founded', description: 'Established in Rewari, Haryana as a manufacturer of copper cable lugs.', icon: Factory },
              { year: '2005', title: 'ISO 9001 Certification', description: 'Achieved ISO 9001 quality management certification, reinforcing our commitment to standards.', icon: Award },
              { year: '2012', title: 'Product Range Expansion', description: 'Expanded into aluminium lugs, ring terminals, and custom electrical components.', icon: History },
              { year: '2023', title: 'Industry Leadership', description: 'Serving 20+ industries across India with 50+ product variants and growing.', icon: Users }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-8"
              >
                <div className="w-24 text-xl font-bold text-blue-600 shrink-0">{milestone.year}</div>
                <div className="flex-shrink-0 mt-1">
                  <milestone.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600 mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'IS 8309 compliant products',
              'Electrolytic grade copper used',
              'In-house quality testing',
              'Custom sizes available',
              'Pan-India delivery',
              '25+ years of manufacturing experience',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;