import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Rating } from '../../components/Elements/Rating';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, error, setUrl } = useFetch();

    useEffect(() => {
        setUrl(`http://localhost:8000/products/${id}`);
    }, [id]);
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
                    <div className="flex flex-wrap justify-around">
                        <div className="max-w-xl my-3">
                            <img
                                className="rounded"
                                src={product.imageURL[0].URL}
                                alt="Philodendron Red + Elite Matte"
                            />
                        </div>
                        <div className=" max-w-xl my-3">
                            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                                <span className="mr-1">$</span>
                                <span className="">{product.price}</span>
                            </p>
                            <p className="my-3">
                                <Rating rating={product.rating} />
                            </p>
                            <p className="flex justify-between my-4  ">
                            </p>
                            <span>
                                {
                                    <button
                                        className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-900`}
                                    >
                                        Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                                    </button>
                                }
                            </span>
                            <p className="my-4 text-lg text-slate-900 dark:text-slate-200">
                                {product.slug}
                            </p>
                        </div>
                    </div>
                </section>

            }
        </main>

    )
}
