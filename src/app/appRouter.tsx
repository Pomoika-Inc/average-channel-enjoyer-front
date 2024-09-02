import {createBrowserRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";

export const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <ConnectionPage/>,
        }
    ],
    {
        basename: "/average-channel-enjoyer-front",
    }
);