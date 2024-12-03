import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        setCount(Math.floor(end * percentage));
        
        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <motion.div
        className="text-4xl font-bold text-blue-600 mb-2"
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      >
        {count}+
      </motion.div>
      <div className="text-gray-600">{title}</div>
    </motion.div>
  );
};

export default AnimatedCounter;