import React from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {Tabs} from "@/shared/ui/tabs/Tabs";
import {PendingProductsTab} from "@/pages/management/channelProductsManagementPage/ui/tabs/PendingProductsTab";
import {ActiveProductsTab} from "@/pages/management/channelProductsManagementPage/ui/tabs/ActiveProductsTab";
import {RejectedProductsTab} from "@/pages/management/channelProductsManagementPage/ui/tabs/RejectedProductsTab";

export function ChannelProductsManagementPage() {

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <Tabs tabs={[
                {
                    id: "pending",
                    title: "Pending",
                    content: <PendingProductsTab/>
                },
                {
                    id: "rejected",
                    title: "Rejected",
                    content: <RejectedProductsTab/>
                },
                {
                    id: "active",
                    title: "Active",
                    content: <ActiveProductsTab/>
                }
            ]}/>
        </>
    )
}