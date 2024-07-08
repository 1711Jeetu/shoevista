import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Rating } from '../../components/Elements/Rating';
import { useCart } from '../../context/CartContext';
import { DetailSkeleton } from './components/DetailSkeleton';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, setUrl } = useFetch();
    const { cartList, addToCart, removeFromCart, count } = useCart();
    const [inCart, setInCart] = useState();
    const temp = product && product.id;
    const token = JSON.parse(sessionStorage.getItem('token'));
    const navigate = useNavigate();

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === temp);
        if (productInCart) {
            setInCart(true)
        } else {
            setInCart(false);
        }
    }, [cartList, temp]);


    useEffect(() => {
        setUrl(`${process.env.REACT_APP_HOST}/products/${id}`);
    }, [id,setUrl]);

    const [activeImg, setActiveImg] = useState()
    useEffect(() => {
        setActiveImg(product && product.imageURL[0].URL)
    }, [product])

    const handleAddToCart = () => {
        if(token){
            addToCart(product)
        }else{
            navigate("/login")
        }
      }
    return (
        <main>

            {isLoading && <DetailSkeleton />}

            {product &&

                <section className='py-2 my-2 '>
                    <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-slate-900 dark:text-slate-200">
                        {product.name}
                    </h1>
                    <p className="mb-5 text-lg text-center text-slate-900 dark:text-slate-200">
                        {product.gender} - {product.category}
                    </p>
                    <div className="flex justify-center ml-12">
                        <div className="grid gap-4 max-w-sm">
                            <div className='main-image-container'>
                                <InnerImageZoom
                                    src={activeImg}
                                    zoomSrc={activeImg}
                                    zoomType="hover"
                                    zoomPreload={true}
                                />
                            </div>
                            <div className="grid grid-cols-5 gap-4">
                                <div>
                                    <img className=" hover:cursor-pointer hover:scale hover:scale-110 border max-w-full rounded-lg" src={product.imageURL[1].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[1].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full border hover:cursor-pointer hover:scale-110 rounded-lg" src={product.imageURL[2].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[2].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full border hover:cursor-pointer hover:scale-110 rounded-lg" src={product.imageURL[3].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[3].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full border hover:cursor-pointer hover:scale-110 rounded-lg" src={product.imageURL[4].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[4].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full border hover:cursor-pointer hover:scale-110 rounded-lg" src={product.imageURL[0].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[1].URL)} />
                                </div>
                            </div>
                        </div>
                        <div className=" ml-12">
                            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                                <span className="mr-1">$</span>
                                <span className="">{product.price}</span>
                            </p>
                            <p className="my-3">
                                <Rating rating={product.rating} />
                            </p>
                            <p className="flex justify-between my-4  ">
                            </p>
                            <p className="my-4 text-lg text-slate-900 dark:text-slate-200">
                                {product.description}
                            </p>
                            <div className="flex">
                                <p className="my-4 text-lg text-slate-900 dark:text-slate-200">
                                    Colors: <span>{product.colors}</span>
                                </p>
                                {
                                    product.is_in_inventory &&
                                    <p className=" my-4 pl-10 text-lg text-slate-900 dark:text-slate-200">
                                        Items left: <span>{product.items_left}</span>
                                    </p>
                                }
                                {
                                    !product.is_in_inventory &&
                                    <p className=" my-3 ml-10 text-lg text-slate-200 rounded-lg p-1 bg-red-700 dark:bg-red-900">
                                        Currently unavailable, restocking soon.
                                    </p>
                                }
                            </div>
                            <div className="relative mb-5 overflow-x-auto shadow-md sm:rounded-lg" style={{ maxWidth: '300px' }}>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-w-sm">
                                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className='pt-2 pl-2'>
                                                Size Chart
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[0]}
                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[1]}

                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[2]}

                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700 cursor-pointer">
                                            <td className="px-6 py-4">
                                                {product.size[3]}
                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[4]}
                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[5]}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[6]}
                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[7]}
                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[8]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <span className='mt-5' >
                                {
                                    (!inCart || count === 0) &&
                                    <button
                                        className={`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white  ${product.is_in_inventory ? 'bg-primary-500 dark:bg-primary-700' : 'bg-gray-300 dark:bg-gray-500'} rounded-lg `} disabled={product.is_in_inventory ? false : true}
                                        onClick={handleAddToCart}
                                    >
                                        <div className={` ${product.is_in_inventory ? 'dark:text-slate-100 text-slate-100' : 'text-slate-800 dark:text-slate-100'}  text-xl mt-1 text-slate-100 justify-center dark:text-slate-50 bi bi-cart`}></div>
                                        <i className={`ml-1 mt-1 ${product.is_in_inventory ? 'dark:text-slate-100 text-slate-100' : 'text-slate-800 dark:text-slate-100'} bi bi-plus-lg dark:text-slate-50 text-slate-100`}></i>
                                    </button>
                                }
                                {
                                    inCart && <button
                                        className={`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white dark:bg-red-800 bg-red-800 rounded-lg `} disabled={product.is_in_inventory ? false : true}
                                        onClick={() => removeFromCart(product)}

                                    >
                                        <div className={`hover:cursor-pointer text-xl mt-1 text-slate-100 justify-center dark:text-slate-50 bi bi-cart`}></div>
                                        <i className="ml-1 mt-1 bi bi-dash-lg dark:text-slate-50 text-slate-100"></i>
                                    </button>
                                }
                            </span>
                        </div>
                    </div>
                </section>

            }
        </main>

    )
}
