import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

type ImageItem = {
  src: string;
  alt: string;
  title: string;
  location: string;
};

type ImageCarouselProps = {
  items: ImageItem[];
  imageHeight?: string;
  mobileImageHeight?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
  breakpoints?: any;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  items,
  imageHeight = 'h-64',
  mobileImageHeight = 'h-48',
  slidesPerView = 1,
  spaceBetween = 24,
  loop = true,
  autoplay = false,
  showNavigation = true,
  //   showPagination = true,
  className = '',
  breakpoints,
}) => {
  const responsiveHeightClass = `${mobileImageHeight} md:${imageHeight}`;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      autoplay={autoplay ? { delay: 3000 } : false}
      navigation={showNavigation}
      // pagination={showPagination ? { clickable: true } : false}
      className={className}
      breakpoints={breakpoints}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full">
            <img
              src={item.src}
              alt={item.alt}
              className={`${responsiveHeightClass} w-full object-cover`}
            />
            <div className="  p-4">
              <div className="font-bold">{item.title}</div>
              <div className="text-sm">{item.location}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
