import React, { useState, useEffect } from 'react';
import './Carousel.css'; 
import Hero from './Hero';

const Home = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      const nextIndex = (currentImageIndex + 1) % images.length;
      
      setCurrentImageIndex(nextIndex);
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />

      <div className='coming'>
        <div className='second'>

        <p className='para'>Coming 6.5</p>
    <h1 className='nikee'>NIKE PEGASUS 41</h1>
    <p className='para'>Get ready to feel the responsive energy return to the Air Zoom and all-new ReactX foam </p>
      <button className='btn'>Notify Me-Men's</button>
      <button className='btn'>Notify Me-Women's</button>
   
    </div>

      </div>
      <Hero />
      
    </div>
  );
};

export default Home;