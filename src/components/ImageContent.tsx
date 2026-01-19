import React from 'react';

type ImageContentProps = {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  imageLeft?: boolean;
  imageHeight?: string; // e.g. "h-64", "h-80", "h-[400px]"
  onButtonClick?: () => void;
};

const ImageContent: React.FC<ImageContentProps> = ({
  image,
  title,
  description,
  buttonText,
  imageLeft = true,
  imageHeight = 'h-64',
  onButtonClick,
}) => (
  <div className={`flex flex-col md:flex-row ${!imageLeft ? 'md:flex-row-reverse' : ''} items-center gap-8 mb-12`}>
    <div className={`w-full md:w-1/2`}>
      <img
        src={image}
        alt={title}
        className={` w-full object-cover ${imageHeight}`}
      />
    </div>
    <div className="w-full md:w-1/2 px-20 flex flex-col gap-5 items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl font-normal ">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {buttonText && (
        <button
          className="bg-primary text-center w-full py-2 rounded hover:bg-primary-dark transition"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

export default ImageContent;