import React, {useEffect, useRef, useState} from 'react'
import { Card } from '../../components/Elements/Card'
import useFetch from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import { useFilter } from '../../context/FilterContext'
import { useDynamicTitle } from '../../hooks/useDynamicTitle'
import { DropDownProduct } from './components/DropDownProduct'

export const ProductPage = ({title}) => {
  useDynamicTitle(title);

  const { products, setInitialProductList,dispatch } = useFilter();
  const [searchParams] = useSearchParams();
  const [dropdown, setDropdown] = useState(false);
  const filterRef = useRef(null);

  const queryTerm = searchParams.get('q');
  const URL = `http://localhost:8000/products${queryTerm ? '?brand_like=' + queryTerm : ''}`;
  console.log(URL);

  function onProductFetch(data) {  
    console.log(data);
    setInitialProductList(data);
  }
  const {isLoading,setUrl } = useFetch(URL, onProductFetch);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    //Attach the event listner
    document.addEventListener("mousedown", handleClickOutside);

    //clean up the event listner or component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [filterRef]);

  useEffect(() => {
    setUrl(`http://localhost:8000/products${queryTerm ? '?brand_like=' + queryTerm : ""}`)
  }, [queryTerm, setUrl]);
  

  return (
    <main>
      <div className="flex justify-between pt-7 ">
        <h2 className='text-2xl font-semibold dark:text-slate-100 section-title pl-2'>
        {products && products.length === 0 && "No Products Found"}
          {queryTerm && products && products.length !== 0 && `Products For: ${queryTerm} (${products.length})`}
          {!queryTerm && products && products.length !== 0 && `All Products`}
        </h2>
        <button type="button" class="px-1 font-medium text-center text-white dark:bg-primary-700 rounded-lg hover:bg-primary-800 me-2" onClick={()=>setDropdown(!dropdown)}>Filters</button>
        {
          dropdown && <DropDownProduct setDropdown={setDropdown} refProp={filterRef} gender={'products'} />
        }
      </div>
      <div className='flex flex-wrap justify-center mt-2 lg:flex-row'>
        {
          products && products.map(product => <Card key={product.id} product= { product } />
          )
        }
      </div>
    </main>
  )
}
