import React, {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import { Card } from '../../components/Elements/Card'
import { useFilter } from '../../context/FilterContext'
import { useSearchParams } from 'react-router-dom';


export const Men = () => {

  const { products, setInitialProductList } = useFilter();
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
    <div className="flex justify-center pt-7">
      <h2 className='text-2xl font-semibold dark:text-slate-100 mb-5 section-title'>Men's Section</h2>
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
