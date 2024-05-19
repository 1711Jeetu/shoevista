import React from 'react';
import { Link } from 'react-router-dom';
import './ParallaxEffect.css';

const ParallaxCard = () => {

  return (
    <div className='flex bg-fixed bg-parallax bg-cover justify-end' style={{ marginTop: '70px', height: '30rem' }}>
      <button className='flex-col container background' style={{marginTop: "400px"}}>
      <Link to="/" className="inline-flex items-center text-lg font-semibold text-center text-white rounded-lg max-h-10 ml-5 mt-5 mb-2 ">
        Shop Now
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
      <div class="bg-inherit rounded-full h-1 ml-4"style={{width: "105px"}}>
        <div class=" h-1 rounded-full bg-white shopNow" style={{ width: `${0}%` }}></div>
      </div>
      </button>
    </div>
  );
};

export default ParallaxCard;
