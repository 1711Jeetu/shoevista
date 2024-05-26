import React, {useEffect} from 'react'
import { Card } from '../../components/Elements/Card'
import useFetch from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import { useFilter } from '../../context/FilterContext'

export const ProductPage = () => {

  const { data: products, error, isLoading, setUrl } = useFetch("http://localhost:8000/products")
  // const { products, setInitialProductList } = useFilter();
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get('q');
  const URL = `http://localhost:8000/products${queryTerm ? '?brand_like=' + queryTerm : ''}`;
  console.log(URL);

  // function onProductFetch(data) {  
  //   setInitialProductList(data);
  // }
  // const {isLoading,setUrl } = useFetch(URL, onProductFetch);

  useEffect(() => {
    setUrl(`http://localhost:8000/products${queryTerm ? '?brand_like=' + queryTerm : ""}`)
  }, [queryTerm, setUrl]);
  

  return (
    <main>
      <div className="flex justify-center pt-7">
        <h2 className='text-2xl font-semibold dark:text-slate-100 mb-5 section-title'>All Products</h2>
      </div>
      <div className='flex flex-wrap justify-center lg:flex-row'>
        {
          products && products.map(product => <Card key={product.id} product= { product } />
          )
        }
      </div>
    </main>
  )
}
