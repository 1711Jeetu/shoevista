import React, {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import { Card } from '../../components/Elements/Card'
import { useFilter } from '../../context/FilterContext'
import { useSearchParams } from 'react-router-dom';
import { useDynamicTitle } from '../../hooks/useDynamicTitle';
import { CardSkeleton } from '../../components/Layout/CardSkeleton';

export const Women = ({title}) => {
  useDynamicTitle(title);
  const { products, setInitialProductList, dispatch } = useFilter();
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get('q');
  const URL = `http://localhost:8000/products${queryTerm ? '?name_like=' + queryTerm : ''}`;

  function onProductFetch(data) {
    setInitialProductList(data);
  }
  const { isLoading,setUrl } = useFetch(URL, onProductFetch);

  useEffect(() => {
    setUrl(`http://localhost:8000/products${queryTerm ? '?name_like=' + queryTerm : ""}`)
      dispatch({type:"CLEAR_FILTER"})
  }, [queryTerm, setUrl]);

  function renderSkeleton(count) {
    const skeletons = [];
    for(let i=1; i<=count; i++){
      skeletons.push(<CardSkeleton key = {i}/>)
    }
    return skeletons;
  }

  return (
    <main>
    <div className="flex justify-center pt-7">
      <h2 className='text-4xl mb-6 font-semibold dark:text-slate-100 section-title pl-2 mt-2'>Women's Section</h2>
    </div>
    <hr className='mb-12 mx-3' />
      <section>
        <div className='flex justify-between mb-4 '>
          <div className="flex">
            <div className='ml-6 mr-3 dark:text-slate-100'>Sort</div>
            <i class="bi bi-chevron-down dark:text-slate-100"></i>
          </div>
          <div className='flex'>
            <div className='mx-3 dark:text-slate-100'>Category</div>
            <i class="bi bi-chevron-down dark:text-slate-100 mr-2"></i>
            <div className='mx-3 dark:text-slate-100'>Brand</div>
            <i class="bi bi-chevron-down dark:text-slate-100 mr-2"></i>
            <div className='mx-3 dark:text-slate-100'>Price</div>
            <i class="bi bi-chevron-down dark:text-slate-100 mr-3"></i>
          </div>
        </div>
        <div className='mx-3 bg-rounded dark:bg-gray-700 bg-gray-200 p-3 dark:text-slate-100'>
          Filters:
          <span id="badge-dismiss-dark" class=" ml-3 inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-white bg-primary-700 rounded dark:bg-primary-100 dark:text-black">
            Filter
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
        </div>
      </section>
    <div className='flex flex-wrap mt-5 justify-center lg:flex-row'>
      {
          isLoading && renderSkeleton(6)
      }
      {
        products && products.filter(product => product.gender==="WOMEN").map(product => <Card key={product.id} product= { product } />
        )
      }
    </div>
  </main>
  )
}
