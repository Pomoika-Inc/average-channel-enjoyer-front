import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import "@twa-dev/sdk";
import css from './ConnectionPage.module.css'
import {useEffect} from "react";

export function ConnectionPage() {

    const userFriendlyAddress = useTonAddress();

    useEffect(() => {
        if (userFriendlyAddress) window.Telegram.WebApp.sendData(userFriendlyAddress)
    }, [userFriendlyAddress]);

    return (
        <div className={css.root}>
            <h1>Want to join crypto luxury?</h1>
            <TonConnectButton/>
        </div>
    );
}