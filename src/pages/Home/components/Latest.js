import React from 'react'
import { Card } from '../../../components/Elements/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};

const products = [
  {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit",
      featured : 0
  },
  {
    id: 2,
    name: "Nike React Miler",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    price: 130,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
    slug: "nike-react-miler",
    featured : 1
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus 37",
    brand: "NIKE",
    gender: "WOMEN",
    category: "RUNNING",
    price: 120,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
    slug: "nike-air-zoom-pegasus-37",
    featured : 0
  },
  {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      price: 180,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      slug: "nike-joyride-run-flyknit",
      featured : 0
    },

]

export const Latest = () => {
  return (
    <div className="slider-container">
            <div className='pb-12 dark:bg-gray-800'>
            <h2 className='text-3xl dark:bg-gray-800 text-center font-semibold dark:text-slate-100 pb-5 pt-5 section-title'>Latest Products</h2>
            <Slider {...settings}>
                {
                    products.map(product => <Card product={product} key={product.id} />)
                }
            </Slider>
        </div>
    </div>
  );
}
