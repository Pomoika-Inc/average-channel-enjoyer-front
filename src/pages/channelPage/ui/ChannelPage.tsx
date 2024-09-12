import "@twa-dev/sdk";
import css from './ChannelPage.module.css'
import React, {useEffect} from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";

export function ChannelPage() {

    useEffect(() => {
    }, []);

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className={css.root}></div>
        </>
    );
}