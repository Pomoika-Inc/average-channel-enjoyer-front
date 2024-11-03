import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "../index.css";
import {appRouter} from "./appRouter";
import {store} from './appStore';
import {Provider} from 'react-redux';
import './../index.css';
import './../shared/global.scss'
import {ThemeProvider} from "@/entities/theme";

const manifestUrl = "https://Pomoika-Inc.github.io/average-channel-enjoyer-front/tonconnect-manifest.json";


const queryClient = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus: false}},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ThemeProvider>
                    <RouterProvider router={appRouter}/>
                </ThemeProvider>
            </Provider>
        </QueryClientProvider>
    </TonConnectUIProvider>
);
