import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  // Premium Plant Images
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      title: "Bring Nature Indoors",
      desc: "Transform your living space with our curated collection of aesthetic indoor plants."
    },
    {
      img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop",
      title: "Expertly Cared For",
      desc: "Healthy, vibrant, and ready to thrive in your beautiful home environment."
    },
    {
      img: "https://images.unsplash.com/photo-1592336417531-15589c36873e?q=80&w=2070&auto=format&fit=crop",
      title: "Grow Your Sanctuary",
      desc: "Start your journey to becoming a plant parent with our professional guidance."
    }
  ];

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Centered Modern Content */}
              <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-10 text-gray-200 font-light drop-shadow-md">
                  {slide.desc}
                </p>
                <button className="bg-lime-400 text-black hover:bg-lime-500  transition-colors duration-300 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl">
                  Shop The Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Styling */}
      <style>{`
        .swiper-button-next, .swiper-button-prev { color: white !important; }
        .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.2); }
      `}</style>
    </div>
  );
};

export default Hero;