import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { WishlistEmpty } from './components/WishlistEmpty';
import { WishlistCard } from './components/WishlistCard';
import { useDynamicTitle } from '../../hooks/useDynamicTitle';

export const WishlistPage = ({title}) => {
    useDynamicTitle(title);
    const { wishlist } = useWishlist();

    return (
        <main>
            {wishlist.length ? <WishlistCard /> : <WishlistEmpty />}
        </main>
    )
}