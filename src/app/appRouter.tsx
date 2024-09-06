import {createHashRouter} from "react-router-dom";
import {ConnectionPage} from "@/pages/connectionPage";

export const appRouter = createHashRouter(
    [
        {
            path: "/login",
            element: <ConnectionPage/>
        }
    ]
);
