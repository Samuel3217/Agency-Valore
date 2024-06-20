"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './Carousel.css';

interface CarouselProps {
  images: string[];
  width?: number;  // Dimensiones opcionales
  height?: number; // Dimensiones opcionales
}

const Carousel: React.FC<CarouselProps> = ({ images, width = 800, height = 600 }) => {
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
    <div className="carousel" style={{ width: `${width}px`, height: `${height}px` }}>
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={width} // Usar dimensiones personalizadas
            height={height} // Usar dimensiones personalizadas
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
