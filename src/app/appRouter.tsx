import {createHashRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";
import {ChannelPage} from "@/pages/channelPage";
import UserLayout from "@/shared/ui/layouts/UserLayout";

export const appRouter = createHashRouter(
    [
        {
            path: 'login',
            element: <ConnectionPage />
        },
        {
            path: '/',
            element: <UserLayout />,
            children: [
                {
                    path: 'channels/:id',
                    element: <ChannelPage />
                }
            ]
        }
    ]
)