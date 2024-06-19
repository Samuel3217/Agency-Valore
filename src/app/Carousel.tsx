"use client"
import './Carousel.css';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setInterval(nextImage, 3000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={800} // Ajusta según sea necesario
            height={600} // Ajusta según sea necesario
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
