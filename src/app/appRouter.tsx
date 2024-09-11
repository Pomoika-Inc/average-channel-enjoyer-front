import {createHashRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";
import {ChannelPage} from "@/pages/channelPage";

export const appRouter = createHashRouter(
    [
        {
            path: 'login',
            element: <ConnectionPage />
        },
        {
            path: 'channels/:id',
            element: <ChannelPage />
        }

        // {
        //     path: '/',
        //     element: <UserLayout />,
        //     children: [
        //         {
        //             path: 'channels/:id',
        //             element: <ChannelPage />
        //         }
        //     ]
        // }
    ]
)