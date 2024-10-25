import Image from 'next/image';
import React from 'react';
import './carrousel.css';

function Carrusel() {
  return (
    <div className='gallery'>
        <span
          style={{ "--i": 1 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='/images/Tarjetas.jpg'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 2 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='/images/diseño-marca.jpg'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 3 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='/images/Diseños.jpg'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 4 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Q8LHZxtl5TQc0vK1JbhDZ5-GAVrDCpfhBA&s'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 5 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='https://cdn.myshoptet.com/usr/www.truhlarime.cz/user/shop/big/7794_eben-africky-c--337--30-x-53-x-161-mm.jpg?64b5193c'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 6 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='http://dummyimage.com/337x161.png/5fa2dd/ffffff'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 7 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='http://dummyimage.com/337x161.png/5fa2dd/ffffff'
            alt='aleatorio 1'
          />
        </span>
        <span
          style={{ "--i": 8 } as React.CSSProperties}
          className='littleSpan'
        >
          <img
            className='littleImg'
            src='http://dummyimage.com/337x161.png/5fa2dd/ffffff'
            alt='aleatorio 1'
          />
        </span>
      </div>

  )
}

export default Carrusel
