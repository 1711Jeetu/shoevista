import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { ProductPage } from '../pages/products/ProductPage'
import { Men } from '../pages/other/Men'
import { Women } from '../pages/other/Women'
import { Kids } from '../pages/other/Kids'

export const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
    </Routes>
  )
}
