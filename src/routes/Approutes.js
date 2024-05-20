import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { ProductPage } from '../pages/products/ProductPage'

export const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductPage />} />
    </Routes>
  )
}
