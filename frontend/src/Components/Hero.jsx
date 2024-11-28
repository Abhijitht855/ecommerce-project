// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400 '>
//         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                 </div>
//             </div>
//         </div>

//         <img className='w-full sm:w-1/2' src={assets.newhero} alt="" />
//     </div>
//   )
// }

// export default Hero

import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  // Define the array of images
  const images = [assets.newhero, assets.newhero1];  // Add your image paths here

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to handle the manual change of images
  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#d0d0d0] p-10 sm:p-16 rounded-md">
      {/* Text Content */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left space-y-6 sm:space-y-8">
        <div className="flex justify-center sm:justify-start items-center gap-3">
          <p className="w-10 h-[2px] bg-[#333]"></p>
          <p className="font-medium text-sm uppercase tracking-widest text-[#333]">Explore Our Bestsellers</p>
        </div>
        <h1 className="prata-regular text-4xl sm:text-6xl font-bold text-[#333] leading-tight sm:leading-snug">
          New Arrivals Are Here
        </h1>
        <div className="flex justify-center sm:justify-start">
          <Link to='/collection' className="bg-[#333] text-white py-3 px-6 rounded-full text-lg font-medium shadow-md hover:bg-[#444] transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Image with manual navigation */}
      <div className="w-full sm:w-1/2 mt-10 sm:mt-0 sm:pl-10 relative overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-lg shadow-xl transition-transform duration-500"
          src={images[currentIndex]}  // Dynamically change the image based on currentIndex
          alt="Latest Arrivals"
        />

        {/* Manual Navigation Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrevImage}
            className="bg-white text-[#333] rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
          >
            <span className="material-icons">-</span>
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNextImage}
            className="bg-white text-[#333] rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
          >
            <span className="material-icons">-</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
