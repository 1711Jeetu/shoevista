import React, {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import { Card } from '../../components/Elements/Card'
import { useFilter } from '../../context/FilterContext'
import { useSearchParams } from 'react-router-dom';
import { useDynamicTitle } from '../../hooks/useDynamicTitle';

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
  return (
    <main>
    <div className="flex justify-between pt-7">
      <h2 className='text-2xl font-semibold dark:text-slate-100 section-title pl-2 mt-2'>Women's Section</h2>
      <button type="button" class="px-1 font-medium text-center text-white dark:bg-primary-700 rounded-lg hover:bg-primary-800 me-2" onClick={()=>dispatch({type:"CLEAR_FILTER"})}>Clear Filters</button>
    </div>
    <div className='flex flex-wrap mt-5 justify-center lg:flex-row'>
      {
        products && products.filter(product => product.gender==="WOMEN").map(product => <Card key={product.id} product= { product } />
        )
      }
    </div>
  </main>
  )
}
