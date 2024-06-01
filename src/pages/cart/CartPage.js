import React from 'react'
import { CartCard } from './components/CartCard'
import { CartEmpty } from './components/CartEmpty';
import { useCart } from '../../context/CartContext';
import { useDynamicTitle } from '../../hooks/useDynamicTitle';

export const CartPage = ({title}) => {
    useDynamicTitle(title);
    const {cartList} = useCart();
    return (
        <main>
             { cartList.length ? <CartCard /> : <CartEmpty /> }
        </main>
    )
}
