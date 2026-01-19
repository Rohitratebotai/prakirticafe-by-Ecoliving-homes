import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface GalleryGridProps {
  images: GalleryImage[];
  resortName: string;
  heroImage?: string;
  resortOptions?: Array<{ name: string; value: string }>;
  onResortChange?: (value: string) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  resortName,
  heroImage,
  // resortOptions = [],
  // onResortChange,
}) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % images.length;
    setLightboxIndex(newIndex);
    setLightboxImage(images[newIndex].src);
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + images.length) % images.length;
    setLightboxIndex(newIndex);
    setLightboxImage(images[newIndex].src);
  };

  // Group images in sets of 6 for the repeating pattern
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 6) {
    groupedImages.push(images.slice(i, i + 6));
  }

  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <img
            src={heroImage || images[0]?.src}
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>

        {/* Breadcrumb/Title Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-2">
              GALLERY
            </h1>
            <p className="text-lg text-gray-600 font-light">{resortName}</p>
          </div>
        </div>

        {/* Resort Selector (Optional) */}
        {/* {resortOptions.length > 0 && (
          <div className=" bg-gray-50 border-b border-gray-200">
            <div className="flex w-full mx-auto px-6 py-6">
              <div className="flex items-center gap-20">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Select Resort
                </label>
                <select
                  onChange={(e) => onResortChange?.(e.target.value)}
                  className="px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  {resortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )} */}

        {/* Gallery Grid - Custom Pattern Layout */}
        <div className="w-[90%] mx-auto px-6 py-16">
          <div className="space-y-4">
            {groupedImages.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-20">
                {/* Row 1: Large left, Small right */}
                {group[0] && group[1] && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
                      <div className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-gray-100 aspect-3/4">
                        <img
                          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80"
                          alt="Portrait"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>
                      <div className="md:col-span-3 relative group cursor-pointer overflow-hidden bg-gray-100 aspect-5/3">
                        <img
                          src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80"
                          alt="Wide photo"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Row 2: Small left, Large right */}
                {group[2] && group[3] && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div
                      className="md:col-span-1 relative group cursor-pointer overflow-hidden bg-gray-100 aspect-16/18"
                      onClick={() => openLightbox(group[2].src, groupIndex * 6 + 2)}
                    >
                      <img
                        src={group[2].src}
                        alt={group[2].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <div
                      className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-gray-100 aspect-16/13"
                      onClick={() => openLightbox(group[3].src, groupIndex * 6 + 3)}
                    >
                      <img
                        src={group[3].src}
                        alt={group[3].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                  </div>
                )}



                {/* Row 3: Large left, Small right */}
                {group[4] && group[5] && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div
                      className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-gray-100 aspect-16/10"
                      onClick={() => openLightbox(group[4].src, groupIndex * 6 + 4)}
                    >
                      <img
                        src={group[4].src}
                        alt={group[4].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <div
                      className="md:col-span-1 relative group cursor-pointer overflow-hidden bg-gray-100 aspect-16/10"
                      onClick={() => openLightbox(group[5].src, groupIndex * 6 + 5)}
                    >
                      <img
                        src={group[5].src}
                        alt={group[5].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
              onClick={closeLightbox}
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-6 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              className="absolute right-6 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>

            {/* Image */}
            <div className="max-w-6xl max-h-[90vh] p-4">
              <img
                src={lightboxImage}
                alt="Lightbox"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </MainLayout >
  );
};

export default GalleryGrid;