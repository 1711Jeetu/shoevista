import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Rating } from '../../components/Elements/Rating';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, error, setUrl } = useFetch();

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
            {product &&

                <section className='py-2 my-2 '>
                    <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-slate-900 dark:text-slate-200">
                        {product.name}
                    </h1>
                    <p className="mb-5 text-lg text-center text-slate-900 dark:text-slate-200">
                        {product.gender}
                    </p>
                    <div className="flex justify-center ml-12">
                        <div className="grid gap-4 max-w-sm">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={activeImg} alt="" />
                            </div>
                            <div className="grid grid-cols-5 gap-4">
                                <div>
                                    <img className=" hover:cursor-pointer hover:scale max-w-full rounded-lg" src={product.imageURL[1].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[1].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full hover:cursor-pointer rounded-lg" src={product.imageURL[2].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[2].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full hover:cursor-pointer rounded-lg" src={product.imageURL[3].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[3].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full hover:cursor-pointer rounded-lg" src={product.imageURL[4].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[4].URL)} />
                                </div>
                                <div>
                                    <img className=" max-w-full hover:cursor-pointer rounded-lg" src={product.imageURL[0].URL} alt="" onMouseEnter={() => setActiveImg(product.imageURL[1].URL)} />
                                </div>
                            </div>  
                        </div>
                        <div className="my-3 ml-12">
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
                            <p className="my-4 text-lg text-slate-900 dark:text-slate-200">
                                Colors: <span>{product.colors}</span>
                            </p>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center max-w-sm mx-auto">
                                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3">
                                                Size Chart
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">
                                            <td class="px-6 py-4">
                                                {product.size[0]}
                                            </td>
                                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                {product.size[1]}

                                            </td>
                                            <td class="px-6 py-4">
                                                {product.size[2]}

                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">
                                            <td class="px-6 py-4">
                                            {product.size[3]}
                                            </td>
                                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            {product.size[4]}
                                            </td>
                                            <td class="px-6 py-4">
                                            {product.size[5]}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">
                                            <td class="px-6 py-4">
                                            {product.size[6]}
                                            </td>
                                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            {product.size[7]}
                                            </td>
                                            <td class="px-6 py-4">
                                            {product.size[8]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <span>
                                {
                                    <button
                                    className={`inline-flex items-center py-3 px-5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-900`}
                                >
                                    <div className='hover:cursor-pointer text-xl mt-1 text-slate-800 justify-center dark:text-slate-50 bi bi-cart'></div>
                                    <i className="ml-1 mt-1 bi bi-plus-lg"></i>
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
