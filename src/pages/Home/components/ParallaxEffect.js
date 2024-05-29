import React from 'react';
import { Link } from 'react-router-dom';
import './ParallaxEffect.css';

const ParallaxCard = () => {

  return (
    <div className='flex bg-fixed bg-parallax bg-cover relative' style={{ marginTop: '70px', height: '30rem' }}>
      <h1 className='absolute text-4xl font-bold' style={{left: '130px', top: '100px'}}>Step Into Style And Comfort</h1>
      <h6 className='absolute text-xl' style={{left: '160px', top: '150px'}}>Discover the Perfect Pair for Every Occasion</h6>
      <button className='flex-col container absolute background' style={{left: '300px', top: '190px'}}>
      <Link to="/products" className="inline-flex items-center font-semibold text-black rounded-lg max-h-12 text-xl ml-2 mt-5 mb-2">
        Shop Now
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
      <div className="bg-inherit rounded-full h-1 ml-2"style={{width: "130px"}}>
        <div className=" h-1 rounded-full bg-black shopNow" style={{ width: `${0}%` }}></div>
      </div>
      </button>
    </div>
  );
};

export default ParallaxCard;
