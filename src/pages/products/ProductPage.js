import React from 'react'
import { Card } from '../../components/Elements/Card'
import useFetch from '../../hooks/useFetch'

export const ProductPage = () => {

  const { data: products, error, isLoading, setUrl } = useFetch("http://localhost:8000/products")

  return (
    <main>
      <div className="flex justify-center pt-4">
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
