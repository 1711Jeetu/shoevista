import React from 'react'
import { CartCard } from './components/CartCard'
import { CartEmpty } from './components/CartEmpty';
import { useCart } from '../../context/CartContext';

export const CartPage = () => {
    const {cartList} = useCart();
    return (
        <main>
             { cartList.length ? <CartCard /> : <CartEmpty /> }
        </main>
    )
}
