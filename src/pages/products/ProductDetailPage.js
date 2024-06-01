import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Rating } from '../../components/Elements/Rating';
import { useCart } from '../../context/CartContext';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, error, setUrl } = useFetch();
    const { cartList, addToCart, increaseCount, decreaseCount, count } = useCart();
    // console.log(addToCart);
    const [inCart, setInCart] = useState();
    const temp = product && product.id;

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === temp);
        if (productInCart) {
            setInCart(true)
        } else {
            setInCart(false);
        }
    }, [cartList, temp]);

    useEffect(() => {
        setUrl(`http://localhost:8000/products/${id}`);
    }, [id]);
    const [shoe, setShoe] = useState();

    const [activeImg, setActiveImg] = useState()
    useEffect(() => {
        setActiveImg(product && product.imageURL[0].URL)
    }, [product])
    return (
        <main>
            {
                isLoading && <p>Loading...</p>
            }
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
                            <div>
                                <img className="h-auto border max-w-full rounded-lg" src={activeImg} alt=""/>
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
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center max-w-sm mx-auto">
                                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className='pt-2'>
                                                Size Chart
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="px-6 py-4 cursor-pointer">
                                                {product.size[0]}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer">
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
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer">
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
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cursor-pointer">
                                            {product.size[7]}
                                            </td>
                                            <td className="px-6 py-4 cursor-pointer">
                                            {product.size[8]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <span >
                            {
                        (!inCart || count === 0) &&
                        <button
                            className={`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-slate-100 bg-primary-100 dark:bg-primary-700 rounded-lg `} disabled={product.is_in_inventory ? false : true}
                            onClick={() => addToCart(product)}
                        >
                            <div className='hover:cursor-pointer text-xl mt-1 text-slate-800 justify-center dark:text-slate-50 bi bi-cart'></div>
                            <i className="ml-1 mt-1 bi bi-plus-lg dark:text-slate-50 text-slate-800"></i>
                        </button>
                    }
                    {
                        inCart && count > 0 && <div className="flex items-center">
                            {
                                <button className={`inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600`} disabled={count === 0 ? true : false} type="button" onClick={() => {
                                    decreaseCount(product)
                                    product.count--;
                                }}>
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                    </svg>
                                </button>
                            }
                            <div>
                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2.5 py-1 dark:bg-gray-700 text-center dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={product.count} required />
                            </div>
                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button" onClick={() => {
                                increaseCount(product)
                                product.count++
                            }}>
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    }

                            </span>
                        </div>
                    </div>
                </section>

            }
        </main>

    )
}
