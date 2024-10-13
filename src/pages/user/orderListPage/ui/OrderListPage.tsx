import React from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";
import {Tabs} from "@/shared/ui/tabs/Tabs";
import {OrdersTab} from "@/pages/user/orderListPage/ui/OrdersTab";

export function OrderListPage() {

    const orders = useSelector((state: RootState) => state.order.orders)

    const pendingOrders = orders.filter(order => !order.finishedAt)
    const completedOrders = orders.filter(order => order.finishedAt)

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <Tabs tabs={[
                {
                    id: "pending",
                    title: "Pending",
                    content: <OrdersTab orders={pendingOrders}/>
                },
                {
                    id: "completed",
                    title: "Completed",
                    content: <OrdersTab orders={completedOrders}/>
                }
            ]}/>
        </>
    )
}