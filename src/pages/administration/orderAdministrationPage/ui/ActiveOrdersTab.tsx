import React, {useState} from "react";
import {OrderCard} from "@/entities/order/ui/OrderCard";
import {ProductCard} from "@/entities/product";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";
import {Filter} from "@/shared/ui/filter/Filter";
import {Order} from "@/entities/order/model/orderTypes";

export function ActiveOrdersTab() {

    const orders = useSelector((state: RootState) => state.order.orders)
    const activeOrders = orders.filter(order => !order.finishedAt)
    const [filteredOrders, setFilteredOrders] = useState<Order[]>(activeOrders)

    const filterRule = (element: any, selectedOption: any) => {
        return element.userApprove.approvedAt && 'approved' === selectedOption
            || !element.userApprove.approvedAt && 'not_approved' === selectedOption
    }
    return (
        <div className="flex flex-col items-center">

            <Filter filterOptions={[
                    {name: 'Approved', value: 'approved'},
                    {name: 'Not Approved', value: 'not_approved'}]
                }
                listToFilter={activeOrders}
                onFilterChange={setFilteredOrders}
                filterRule={filterRule}
            />


            <ul className="flex flex-col w-full p-3 gap-2">
                {filteredOrders.map((order) => (
                    <li key={order.id}>
                        <OrderCard order={order} actionContent={
                            <button className="rounded-2xl py-1 px-3 mx-3 mt-2 bg-cyan-600">
                                Approve order
                            </button>
                        }
                           productsContent={
                               <div className="flex flex-col w-full px-3">
                                   <span className="text-lg">Bought products:</span>
                                   <ul className="w-full mt-2">
                                       {order.products.map(product =>
                                           (<li key={product.id}>
                                               <ProductCard product={product}/>
                                           </li>)
                                       )}
                                   </ul>
                               </div>
                           }
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}