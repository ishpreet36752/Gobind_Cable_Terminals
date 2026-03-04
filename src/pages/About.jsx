import { motion } from 'framer-motion';
import manufacturingImg from '../images/manufacturing.jpeg';

const About = () => {
  return (
    <div className="w-full flex flex-col bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-3 mb-10 text-center lg:text-left"
        >
          <h1 className="text-slate-900 text-4xl lg:text-5xl font-black leading-tight tracking-tight">About Us</h1>
          <p className="text-blue-600 text-xl font-medium leading-normal">Gobind Cable Terminals: A legacy of excellence in manufacturing.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-slate-700 text-lg font-normal leading-relaxed">
              Established in 1998, Gobind Cable Terminals has been at the forefront of the industrial manufacturing sector, delivering high-quality, reliable solutions to businesses worldwide. Our commitment to innovation and precision engineering drives us to continuously improve and expand our capabilities. We pride ourselves on building robust connections—both in our products and with our clients.
            </p>
          </motion.div>

          {/* Facility Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <img
              src={manufacturingImg}
              alt="Modern clean industrial manufacturing facility interior"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-12 mb-20">
          <h2 className="text-slate-900 text-3xl font-bold leading-tight tracking-tight pb-10 text-center">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-8 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-3xl">track_changes</span>
                </div>
                <h3 className="text-blue-600 text-2xl font-bold leading-normal">Our Mission</h3>
              </div>
              <p className="text-slate-700 text-base font-normal leading-relaxed">
                To provide superior cable termination solutions that exceed industry standards, ensuring safety, reliability, and efficiency for our partners. We are dedicated to relentless quality control and responsive customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 p-8 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
                </div>
                <h3 className="text-blue-600 text-2xl font-bold leading-normal">Our Vision</h3>
              </div>
              <p className="text-slate-700 text-base font-normal leading-relaxed">
                To be the global leader in industrial cable terminals, recognized for our innovative approach, sustainable practices, and unwavering commitment to customer success. We aim to power the future of industry safely.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-slate-900 text-3xl font-bold leading-tight tracking-tight pb-16 text-center">Our Journey</h2>
          <div className="relative w-full max-w-4xl mx-auto px-4">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            {/* Timeline Items */}
            {[
              { year: '1998', title: 'The Beginning', desc: 'Gobind Cable Terminals was established in a small workshop, focusing on basic terminal designs for local industries.', align: 'right' },
              { year: '2005', title: 'Expansion', desc: 'Moved to a larger manufacturing facility and introduced automated crimping technology to increase production capacity.', align: 'left' },
              { year: '2015', title: 'ISO Certification', desc: 'Achieved ISO 9001 certification, marking our commitment to international quality standards and opening global markets.', align: 'right' },
              { year: '2023', title: 'Modernization', desc: 'Launched our new line of eco-friendly, high-voltage terminals and integrated AI-driven quality inspection systems.', align: 'left' }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center justify-between mb-12 w-full ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Spacer for large screens */}
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-blue-600 shadow-lg flex items-center justify-center border-4 border-gray-50">
                  <span className="font-bold text-white text-sm">{item.year.substring(2)}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${item.align === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="mb-2 font-bold text-slate-900 text-xl">{item.year}: {item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-slate-900 text-3xl font-bold leading-tight tracking-tight pb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'verified', title: 'Premium Quality', desc: 'Manufactured using the highest grade materials with strict adherence to international safety protocols.' },
              { icon: 'precision_manufacturing', title: 'Advanced Engineering', desc: 'Utilizing state-of-the-art machinery and innovative design practices for precise, reliable terminations.' },
              { icon: 'support_agent', title: 'Dedicated Support', desc: 'Our expert technical team is available globally to provide consultation and ongoing post-sales support.' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-600/30 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-slate-900 text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;