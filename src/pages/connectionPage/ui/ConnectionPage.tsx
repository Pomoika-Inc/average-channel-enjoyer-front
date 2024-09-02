
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";

import styled from "styled-components";

import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import {useTonConnect} from "../../../hooks/useTonConnect";
import {FlexBoxCol, FlexBoxRow} from "../../../components/styled/styled";

const StyledApp = styled.div`
    background-color: #e8e8e8;
    color: black;

    @media (prefers-color-scheme: dark) {
        background-color: #222;
        color: white;
    }
    min-height: 100vh;
    padding: 20px 20px;
`;

const AppContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;


export function ConnectionPage() {
    const { network } = useTonConnect();
    const userFriendlyAddress = useTonAddress();

    const sendData = () => {
        window.Telegram.WebApp.sendData('test send data')
    }

    return (
        <StyledApp>
            <AppContainer>
                <FlexBoxCol>
                    <FlexBoxRow>
                        <TonConnectButton />
                        <button onClick={sendData}>
                            SEND DATA
                        </button>
                        {userFriendlyAddress && userFriendlyAddress}
                    </FlexBoxRow>
                </FlexBoxCol>
            </AppContainer>
        </StyledApp>
    );
}