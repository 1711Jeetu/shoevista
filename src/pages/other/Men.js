import React, {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import { Card } from '../../components/Elements/Card'
import { useFilter } from '../../context/FilterContext'
import { useSearchParams } from 'react-router-dom';


export const Men = () => {

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
  }, [queryTerm, setUrl]);
  return (
    <main>
    <div className="flex justify-between pt-7">
      <h2 className='text-2xl font-semibold dark:text-slate-100 mb-5 section-title pl-2 mt-2'>
          {products && products.length === 0 && "No Products Found"}
          {!queryTerm && products && products.length !== 0 && `Men's Section`}
      </h2>
      <button type="button" class="px-1 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:focus:ring-blue-800 me-2" onClick={()=>dispatch({type:"CLEAR_FILTER"})}>Clear All Filters</button>
    </div>
    <div className='flex flex-wrap justify-center lg:flex-row'>
      {
        products && products.filter(product => product.gender==="MEN").map(product => <Card key={product.id} product= { product } />
        )
      }
    </div>
  </main>
  )
}
