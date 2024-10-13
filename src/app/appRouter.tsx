import {createHashRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";
import {ChannelPage} from "@/pages/user/channelPage";
import {ChannelListPage} from "@/pages/user/channelListPage";
import {ProductsAdministrationPage} from "@/pages/administration/productsAdministrationPage";
import {OrderListPage} from "@/pages/user/orderListPage";
import {OrdersAdministrationPage} from "@/pages/administration/orderAdministrationPage/ui/OrdersAdministrationPage";
import {ChannelsManagementPage} from "@/pages/management/channelsManagementPage/ui/ChannelsManagementPage";
import {ChannelProductsManagementPage} from "@/pages/management/channelProductsManagementPage/ui/ChannelProductsManagementPage";
import {ChannelOrdersManagementPage} from "@/pages/management/channelOrdersManagementPage";

export const appRouter = createHashRouter(
    [
        {
            path: 'login',
            element: <ConnectionPage/>
        },
        {
            path: 'channels',
            children: [
                {
                    path: ':id',
                    element: <ChannelPage/>
                },
                {
                    path: '',
                    element: <ChannelListPage/>
                }
            ]
        },
        {
            path: 'orders',
            children: [
                {
                    path: '',
                    element: <OrderListPage/>
                }
            ]
        },
        {
            path: 'administration',
            children: [
                {
                    path: 'products',
                    element: <ProductsAdministrationPage/>
                },
                {
                    path: 'orders',
                    element: <OrdersAdministrationPage/>
                }
            ]
        },
        {
            path: 'management',
            children: [
                {
                    path: 'channels',
                    children: [
                        {
                            path: '',
                            element: <ChannelsManagementPage/>
                        },
                        {
                            path: ':id/products',
                            element: <ChannelProductsManagementPage/>
                        },
                        {
                            path: ':id/orders',
                            element: <ChannelOrdersManagementPage/>
                        }
                    ]
                }
            ]
        }
    ]
);