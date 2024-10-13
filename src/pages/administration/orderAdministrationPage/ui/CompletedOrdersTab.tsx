import React from "react";
import {OrderCard} from "@/entities/order/ui/OrderCard";
import {ProductCard} from "@/entities/product";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";

export function CompletedOrdersTab() {

    const orders = useSelector((state: RootState) => state.order.orders)
    const completedOrders = orders.filter(order => order.finishedAt)

    return (
        <div className="flex flex-col items-center">
            <ul className="flex flex-col w-full p-3 gap-2">
                {completedOrders.map((order) => (
                    <li key={order.id}>
                        <OrderCard order={order}
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