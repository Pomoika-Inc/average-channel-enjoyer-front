import React from "react";
import {OrderCard} from "@/entities/order/ui/OrderCard";
import {ProductCard} from "@/entities/product";

import {Order} from "@/entities/order/model/orderTypes";

interface OrdersTabProp{
    orders: Order[]
}

export const OrdersTab: React.FC<OrdersTabProp> = ({orders}) => {

    return (
        <div className="flex flex-col items-center">
            <ul className="flex flex-col w-full p-3 gap-2">
                {orders.map((order) => (
                    <li key={order.id}>

                        <OrderCard order={order} actionContent={
                            (!order.finishedAt &&
                                <button className="rounded-2xl py-1 px-3 mx-3 mt-2 bg-cyan-600">
                                    Approve order
                                </button>
                            )
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