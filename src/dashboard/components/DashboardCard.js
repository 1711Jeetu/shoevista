import { Link } from "react-router-dom"

export const DashboardCard = ({ order }) => {
    return (
        <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                <span>Order Id: {order.id}</span>
            </div>
            {order.cartList.map((product) => (
                <div key={product.id} className="flex flex-wrap justify-between  max-w-4xl m-auto p-2 my-5 ">
                       <div className="flex">
                       <Link to={`/products/${product.id}`}>
                            <img className="w-32 rounded" src={product.imageURL[0].URL} alt={product.name} />
                        </Link>
                        <div className="">
                            <p className="text-lg ml-2 font-semibold dark:text-slate-200">{product.brand}/{product.category}</p>
                            <Link to={`/products/${product.id}`}>
                                <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                            </Link>
                            <div className="text-lg m-2 dark:text-slate-200">
                                <span>${product.price}</span>
                            </div>
                        </div>
                       </div>
                        
                </div>
            ))}
            <div className="dark:text-slate-100 text-right mb-6">
                        <div>SubTotal: ${order.amount_paid}</div>
                        <div>Tax: $10</div>
                        <hr style={{width:'120px',marginLeft:'760px'}}/>
                        <div>Total: ${order.amount_paid + 10}</div>
                        </div>
        </div>
        
    )
}
