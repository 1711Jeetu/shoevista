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
import { DashboardCard } from '../dashboard/components/DashboardCard'
import { DashboardPage } from '../dashboard/DashboardPage'

export const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  )
}
