import React, { useEffect, useRef, useState } from 'react'
import { Card } from '../../components/Elements/Card'
import useFetch from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import { useFilter } from '../../context/FilterContext'
import { useDynamicTitle } from '../../hooks/useDynamicTitle'
import { CardSkeleton } from '../../components/Layout/CardSkeleton'
import { DropDownSortBy } from '../other/components/DropDownSortBy'
import { DropDownCategory } from '../other/components/DropDownCategory'
import { DropDownBrand } from '../other/components/DropDownBrand'
import { DropDownPrice } from '../other/components/DropDownPrice'

export const ProductPage = ({ title }) => {
  useDynamicTitle(title);

  const { products, setInitialProductList, dispatch, state } = useFilter();
  const [searchParams] = useSearchParams();
  const [dropdownSort, setDropdownSort] = useState(false);
  const [dropdownCategory, setDropdownCategory] = useState(false);
  const [dropdownPrice, setDropdownPrice] = useState(false);
  const [dropdownBrand, setDropdownBrand] = useState(false);
  const dropdownSortRef = useRef(null);
  const dropdownCategoryRef = useRef(null);
  const dropdownPriceRef = useRef(null);
  const dropdownBrandRef = useRef(null);

  const queryTerm = searchParams.get('q');
  const URL = `${process.env.REACT_APP_HOST}/products${queryTerm ? '?brand_like=' + queryTerm : ''}`;

  function renderSkeleton(count) {
    const skeletons = [];
    for (let i = 1; i <= count; i++) {
      skeletons.push(<CardSkeleton key={i} />)
    }
    return skeletons;
  }

  function onProductFetch(data) {
    setInitialProductList(data);
  }
  const { isLoading, setUrl } = useFetch(URL, onProductFetch);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownSortRef.current && !dropdownSortRef.current.contains(event.target)) {
        setDropdownSort(false);
      }
      if (dropdownCategoryRef.current && !dropdownCategoryRef.current.contains(event.target)) {
        setDropdownCategory(false);
      }
      if (dropdownPriceRef.current && !dropdownPriceRef.current.contains(event.target)) {
        setDropdownPrice(false);
      }
      if (dropdownBrandRef.current && !dropdownBrandRef.current.contains(event.target)) {
        setDropdownBrand(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [dropdownSortRef, dropdownCategoryRef, dropdownPriceRef, dropdownBrandRef]);

  useEffect(() => {
    setUrl(`${process.env.REACT_APP_HOST}/products${queryTerm ? '?brand_like=' + queryTerm : ""}`)
  }, [queryTerm,setUrl]);


  return (
    <main className='max-w-screen-xl mx-auto'>
      <div className="flex justify-center pt-7">
        <h2 className='text-4xl font-semibold dark:text-slate-100 section-title pl-2 mt-2 mb-6'>
          {products && products.length === 0 && "No Products Found"}
          {!queryTerm && products && products.length !== 0 && `All Products`}
        </h2>
      </div>
      <hr className='mb-12 mx-3' />
      <section>
        <div className='flex justify-between mb-4 '>
          <div className="flex hover:cursor-pointer" onClick={() => setDropdownSort(!dropdownSort)}>
            <button className='ml-6 mr-3 dark:text-slate-100' >Sort</button>
            {dropdownSort && <DropDownSortBy ref={dropdownSortRef} />}
            {!dropdownSort && <i className="bi bi-chevron-down dark:text-slate-100 hover:cursor-pointer"></i>}
            {dropdownSort && <i class="bi bi-chevron-up dark:text-slate-100 hover:cursor-pointer"></i>}
          </div>
          <div className='flex' >
            <div className='mx-3 dark:text-slate-100 hover:cursor-pointer' onClick={() => setDropdownCategory(!dropdownCategory)}>Category</div>
            {dropdownCategory && <DropDownCategory ref={dropdownCategoryRef} />}
            {!dropdownCategory && <i className="bi bi-chevron-down dark:text-slate-100 hover:cursor-pointer" onClick={() => setDropdownCategory(!dropdownCategory)}></i>}
            {dropdownCategory && <i class="bi bi-chevron-up dark:text-slate-100 hover:cursor-pointer"></i>}
            <div className='mx-3 dark:text-slate-100 hover:cursor-pointer' onClick={() => setDropdownBrand(!dropdownBrand)}>Brand</div>
            {dropdownBrand && <DropDownBrand ref={dropdownBrandRef} />}
            {!dropdownBrand && <i className="bi bi-chevron-down dark:text-slate-100 hover:cursor-pointer" onClick={() => setDropdownBrand(!dropdownBrand)}></i>}
            {dropdownBrand && <i class="bi bi-chevron-up dark:text-slate-100"></i>}
            <div className='mx-3 dark:text-slate-100 hover:cursor-pointer' onClick={() => setDropdownPrice(!dropdownPrice)}>Price</div>
            {dropdownPrice && <DropDownPrice ref={dropdownPriceRef} />}
            {!dropdownPrice && <i className=" mr-3 bi bi-chevron-down dark:text-slate-100 hover:cursor-pointer" onClick={() => setDropdownPrice(!dropdownPrice)}></i>}
            {dropdownPrice && <i class=" mr-3 bi bi-chevron-up dark:text-slate-100"></i>}
          </div>
        </div>
      </section>
      {state.filters.length > 0 && <div className='mx-3 bg-rounded dark:bg-gray-700 bg-gray-200 p-3 dark:text-slate-100 flex items-center justify-between'>
        <div>
          Filters:
          {state.filters.map((filter, index) => (
            <div
              key={index}
              id="badge-dismiss-dark"
              className="ml-3 inline-flex items-center px-2 py-1 me-2 text-sm font-medium bg-primary-100 rounded dark:bg-primary-100 text-black"
            >
              {filter.label}
              <button
                type="button"
                className="inline-flex items-center p-1 ms-2 text-sm text-black bg-transparent rounded-sm"
                data-dismiss-target="#badge-dismiss-dark"
                aria-label="Remove"
                onClick={() => {
                  if (filter.type === 'ADD_BRAND') {
                    dispatch({ type: "REMOVE_FILTER", payload: { type: 'ADD_BRAND', brand: filter.label.trim() } });
                  } else {
                    dispatch({ type: "REMOVE_FILTER", payload: { type: filter.type } });
                  }
                }}
              >
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Remove badge</span>
              </button>
            </div>
          ))}
        </div>
        {state.filters.length > 0 && (
          <button
            type="button"
            className="text-white bg-primary-400 hover:bg-primary-800 font-medium rounded-full text-sm px-4 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => dispatch({ type: "CLEAR_FILTER" })}
          >
            Clear All
          </button>
        )}
      </div>}
      <div className='flex flex-wrap justify-center mt-2 lg:flex-row'>
        {
          isLoading && renderSkeleton(6)
        }
        {
          products && products.map(product => <Card key={product.id} product={product} />
          )
        }
      </div>
    </main>
  )
}
