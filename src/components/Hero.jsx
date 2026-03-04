import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import slide1 from '../images/3.jpg';
import slide2 from '../images/2.jpg';
import slide3 from '../images/1.jpg';

const sliderImages = [slide1, slide2, slide3];

const Hero = () => {
    return (
        <section className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Hero Split */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            Premium Manufacturing Quality
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                            Precision Cable Terminals for <span className="text-blue-600">High-Performance</span> Industries.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            IS 8309 compliant copper & aluminium lugs. Manufactured in India. Trusted by 20+ industries for over 25 years.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                Request a Quote
                                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                            </Link>
                            <Link
                                to="/products"
                                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all duration-200"
                            >
                                View Product Catalog
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
                    >
                        {/* Decorative background shape */}
                        <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[2rem] transform rotate-3 -z-10"></div>

                        <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl bg-white border border-gray-100 group h-[400px] lg:h-[500px]">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="w-full h-full"
                            >
                                {sliderImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`Cable Terminals ${index + 1}`}
                                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[10000ms] ease-linear"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Overlay Badge - Minimized */}
                            <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow border border-gray-100 flex items-center gap-2">
                                <div className="text-blue-600">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 leading-none">ISO 9001</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Bar with Animated Counters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100"
                >
                    <AnimatedCounter end={25} title="Years of Excellence" />
                    <AnimatedCounter end={50} title="Product Variants" />
                    <AnimatedCounter end={20} title="Industries Served" />

                    <AnimatedCounter end={100} title="Quality Assured" suffix="%" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
