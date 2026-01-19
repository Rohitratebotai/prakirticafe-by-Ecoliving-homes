import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


type SwiperCarouselProps = {
  items: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
  breakpoints?: any;
};

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  items,
  slidesPerView = 1,
  spaceBetween = 16,
  loop = true,
  autoplay = false,
  showNavigation = true,
  showPagination = false,
  className = '',
  breakpoints,
}) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={slidesPerView}
    spaceBetween={spaceBetween}
    loop={loop}
    autoplay={autoplay ? { delay: 3000 } : false}
    navigation={showNavigation}
    pagination={showPagination ? { clickable: true } : false}
    className={className}
    breakpoints={breakpoints}
  >
    {items.map((item, idx) => (
      <SwiperSlide key={idx}>{item}</SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperCarousel;