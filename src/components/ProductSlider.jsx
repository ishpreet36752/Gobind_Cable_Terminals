import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'src/images/3.jpg',
    title: 'Premium Copper Lugs',
    description: 'Superior conductivity and durability for heavy-duty applications'
  },
  {
    id: 2,
    image: 'src/images/2.jpg',
    title: 'Aluminum Terminals',
    description: 'Lightweight and corrosion-resistant solutions'
  },
  {
    id: 3,
    image: 'src/images/1.jpg',
    title: 'Custom Solutions',
    description: 'Tailored to your specific industrial requirements'
  }
];

const ProductSlider = () => {
  return (
    <div className="relative h-[600px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full  w-full object-fill"
              />
              <div className="absolute inset-0 bg-black/40">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="container mx-auto px-4 h-full flex items-center"
                >
                  <div className="max-w-2xl text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 ">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;