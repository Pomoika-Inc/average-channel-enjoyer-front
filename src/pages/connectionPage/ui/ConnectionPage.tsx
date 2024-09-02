import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import "@twa-dev/sdk";
// import {FlexBoxCol, FlexBoxRow} from "@/components/styled/styled";
import css from './ConnectionPage.module.css'
import {useEffect} from "react";

export function ConnectionPage() {
    // const {network} = useTonConnect();
    const userFriendlyAddress = useTonAddress();

    useEffect(() => {
        // if (userFriendlyAddress) window.Telegram.WebApp.sendData(userFriendlyAddress)
    }, [userFriendlyAddress]);

    return (
        <div className={css.root}>
            <h1>What to join crypto luxury?</h1>
            <TonConnectButton/>
        </div>
    );
}