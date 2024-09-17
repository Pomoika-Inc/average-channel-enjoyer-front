import {createHashRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";
import {ChannelPage} from "@/pages/channelPage";
import {ChannelListPage} from "@/pages/channelListPage";
import {ProductsAdministrationPage} from "@/pages/productsAdministrationPage";
import {CreateProductPage} from "@/pages/createProductPage";

export const appRouter = createHashRouter(
    [
        {
            path: 'login',
            element: <ConnectionPage />
        },
        {
            path: 'channels/:id',
            element: <ChannelPage />
        },
        {
            path: 'channels',
            element: <ChannelListPage />
        },

        {
            path: 'administration/products',
            element: <ProductsAdministrationPage />
        },
        {
            path: 'administration/products/create',
            element: <CreateProductPage />
        },


        // {
        //     path: '/',
        //     element: <UserLayout />,
        //     children: [
        //         {
        //             path: 'channels/:id',
        //             element: <CreateProductPage />
        //         }
        //     ]
        // }
    ]
)