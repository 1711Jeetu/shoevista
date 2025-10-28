import { Link } from 'react-router-dom'

export const WishlistEmpty = () => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100" style={{marginTop: "120px"}}>
            <div className="my-5">
                <p className="bi bi-heart text-red-500 text-7xl mb-5"></p>
                <p>Your wishlist is empty!</p>
                <p>Discover items you love and save them for later.</p>
            </div>
            <Link to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 inline-flex items-center gap-2">
                <span>Continue Shopping</span>
                <i className="bi bi-cart"></i>
            </Link>
        </section>
    )
}