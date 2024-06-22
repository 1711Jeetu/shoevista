import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty"
import { toast } from "react-toastify";
import { getOrders } from "../services/dataService";
import { useDynamicTitle } from "../hooks/useDynamicTitle";

export const DashboardPage = ({title}) => {

  useDynamicTitle(title);  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {  
        const data = await getOrders();
        setOrders(data);
        console.log(data);
      } catch(e) {
        toast.error(e.message);
      }
    }

    setTimeout(() => fetchOrders(), 500);
    // fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl pt-12 text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}
