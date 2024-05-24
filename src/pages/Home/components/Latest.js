import React from 'react'
import { Card } from '../../../components/Elements/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from '../../../hooks/useFetch';


var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};


export const Latest = () => {
  const {data:products} = useFetch("http://localhost:8000/products")

  return (
    <div className="slider-container">
            <div className='pb-12 dark:bg-gray-800'>
            <h2 className='text-3xl dark:bg-gray-800 text-center font-semibold dark:text-slate-100 pb-5 pt-5 section-title'>Latest Products</h2>
            <Slider {...settings}>
                {
                    products && products.filter(product => product.latest === 1 ).map(product => <Card product={product} key={product.id} />)
                }
            </Slider>
        </div>
    </div>
  );
}
