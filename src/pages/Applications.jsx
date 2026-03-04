import { motion } from 'framer-motion';
import transmissionImg from '../images/transmission.jpg';
import manufacturingImg from '../images/manufacturing.jpeg';
import telecomImg from '../images/telecom.jpg';
import railwayImg from '../images/railway.jpg';
import solarImg from '../images/solarplant.jpg';

const applications = [
  {
    id: 1,
    title: 'Power Distribution',
    desc: 'High-voltage terminal solutions for sub-stations and grid infrastructure.',
    icon: 'electric_bolt',
    image: transmissionImg,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 2,
    title: 'Manufacturing',
    desc: 'Rugged connectors for automated assembly lines and heavy machinery.',
    icon: 'precision_manufacturing',
    image: manufacturingImg,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 3,
    title: 'Railways',
    desc: 'Vibration-resistant terminals for rolling stock and signaling systems.',
    icon: 'train',
    image: railwayImg,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 4,
    title: 'Telecom',
    desc: 'Precision grounding and connectivity for 5G towers and data centers.',
    icon: 'cell_tower',
    image: telecomImg,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 5,
    title: 'Solar Energy',
    desc: 'Weather-proof, UV-resistant components for large-scale photovoltaic installations and inverters.',
    icon: 'solar_power',
    image: solarImg,
    colSpan: 'md:col-span-2 lg:col-span-2'
  }
];

const Applications = () => {
  return (
    <div className="w-full flex flex-col bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Industry Applications</h2>
          <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed">
            Trusted components for environments where failure is not an option.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div
              key={app.id}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 ${app.colSpan}`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${app.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl w-fit mb-4 border border-white/30 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-white text-3xl">{app.icon}</span>
                </div>
                <h3 className="text-white text-2xl font-bold leading-tight mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">{app.title}</h3>
                <p className="text-slate-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 max-w-md">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;