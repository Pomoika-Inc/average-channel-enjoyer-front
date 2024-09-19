import {createHashRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";
import {ChannelPage} from "@/pages/channelPage";
import {ChannelListPage} from "@/pages/channelListPage";
import {ProductsAdministrationPage} from "@/pages/productsAdministrationPage";

export const appRouter = createHashRouter(
    [
        {
            path: 'login',
            element: <ConnectionPage />
        },
        {
            path: 'channels',
            children: [
                {
                    path: ':id',
                    element: <ChannelPage />
                },
                {
                    path: '',
                    element: <ChannelListPage />
                }
            ]
        },
        {
            path: 'administration',
            children: [
                {
                    path: 'products',
                    element: <ProductsAdministrationPage />
                }
            ]
        }
    ]
);