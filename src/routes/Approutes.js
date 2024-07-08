import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { ProductPage } from '../pages/products/ProductPage'
import { Men } from '../pages/other/Men'
import { Women } from '../pages/other/Women'
import { Kids } from '../pages/other/Kids'
import { ProductDetailPage } from '../pages/products/ProductDetailPage'
import { Login } from '../pages/Auth/Login'
import { Register } from '../pages/Auth/Register'
import { CartPage } from '../pages/cart/CartPage'
import { Checkout } from '../pages/cart/components/Checkout'
import { DashboardPage } from '../dashboard/DashboardPage'

export const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductPage title='All Products' />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/men' element={<Men title="Men's Shoes" />} />
        <Route path='/women' element={<Women title="Women's Shoes" />} />
        <Route path='/kids' element={<Kids title="Kids Shoes" />} />
        <Route path='/login' element={<Login title="Login" />} />
        <Route path='/register' element={<Register title="Register" />} />
        <Route path='/cart' element={<CartPage title="Your cart" />} />
        <Route path='/checkout' element={<Checkout title="Checkout" />} />
        <Route path='/dashboard' element={<DashboardPage title="Dashboard" />} />
    </Routes>
  )
}
