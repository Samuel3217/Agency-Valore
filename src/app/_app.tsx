// pages/_app.tsx
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('AOS initializing');
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
    console.log('AOS initialized');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
