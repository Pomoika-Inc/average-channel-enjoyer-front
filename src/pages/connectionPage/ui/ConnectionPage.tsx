import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import "@twa-dev/sdk";
import css from './ConnectionPage.module.css'

export function ConnectionPage() {
    const userFriendlyAddress = useTonAddress();

    const sendWalletAddressHandler = () => {
        if (userFriendlyAddress) window.Telegram.WebApp.sendData(userFriendlyAddress)
    }

    return (
        <>
            {userFriendlyAddress ?
                (<div className={css.root}>
                    <h1>Четко. Вы готовы закупаться!</h1>
                    <button className={css.startSellButton}
                            onClick={sendWalletAddressHandler}
                    >Закуп</button>
                </div>)
                :
                (<div className={css.root}>
                    <h1>What to join crypto luxury?</h1>
                    <TonConnectButton/>
                </div>)
            }
        </>
    );
}