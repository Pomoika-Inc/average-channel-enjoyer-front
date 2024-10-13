import React from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {Tabs} from "@/shared/ui/tabs/Tabs";
import {ActiveOrdersTab} from "@/pages/administration/orderAdministrationPage/ui/ActiveOrdersTab";
import {CompletedOrdersTab} from "@/pages/administration/orderAdministrationPage/ui/CompletedOrdersTab";

export function OrdersAdministrationPage() {

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>

            <Tabs tabs={[
                {
                    id: "in_progress",
                    title: "Active",
                    content: <ActiveOrdersTab/>
                },
                {
                    id: "completed",
                    title: "Completed",
                    content: <CompletedOrdersTab/>
                }
            ]}/>
        </>
    )
}