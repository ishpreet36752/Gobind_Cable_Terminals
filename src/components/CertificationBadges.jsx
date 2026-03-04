const badges = [
  {
    id: 1,
    icon: 'factory',
    title: 'ISO 9001 Certified',
    description: 'Global Quality Management System ensuring consistent, premium manufacturing processes and continuous improvement.'
  },
  {
    id: 2,
    icon: 'rule',
    title: 'IS 8309 Compliant',
    description: 'Meeting and exceeding rigorous Indian Standards for electrical connection reliability and performance.'
  },
  {
    id: 3,
    icon: 'precision_manufacturing',
    title: 'Made in India',
    description: 'Proudly manufactured in our state-of-the-art facility, supporting national industrial growth.'
  }
];

const CertificationBadges = () => {
  return (
    <div className="w-full flex flex-col items-center py-16">
      <div className="w-full max-w-5xl px-4 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-blue-600 text-6xl mb-6">verified</span>
        <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Our Certifications</h2>
        <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-16">
          We adhere to the highest industry standards to ensure maximum safety, reliability, and precision in every cable terminal we manufacture.
        </p>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {badges.map((badge) => (
            <div key={badge.id} className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-blue-600/10 shadow-sm hover:shadow-lg hover:border-blue-600/30 transition-all duration-300">
              <div className="w-24 h-24 mb-6 rounded-full bg-blue-600/5 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl">{badge.icon}</span>
              </div>
              <h3 className="text-slate-900 text-xl font-bold leading-tight mb-3">{badge.title}</h3>
              <p className="text-slate-600 text-sm font-normal leading-relaxed text-center">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;