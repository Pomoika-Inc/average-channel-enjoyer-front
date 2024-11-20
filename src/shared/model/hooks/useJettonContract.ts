import { JettonMaster, Mint } from "@/app/wrappers/JettonMaster";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
//import { JettonWallet } from "@/app/wrappers/JettonWallet";
import { AceWallet } from "@/app/wrappers/AceWallet";

import { Address, fromNano, OpenedContract, toNano } from "@ton/core";
import { useEffect, useState } from "react";

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export function useJettonContract() {
    const { client } = useTonClient()
    const { wallet, sender } = useTonConnect()
    const [balance, setBalance] = useState<string | null>()

    const jettonContract = useAsyncInitialize(async () => {
        if (!client) return
        
        const contract = JettonMaster.fromAddress(Address.parse("EQANZCIPKVjAWr6m4aBti8TnqJspen8AG0sQ3i638zClT6H8"))

        return client.open(contract) as OpenedContract<JettonMaster>
    }, [client])

    const jettonWalletContract = useAsyncInitialize(async () => {
        if (!jettonContract || !client || !wallet) return

        const address = await jettonContract.getWalletAddress(Address.parse(wallet))

        return client.open(AceWallet.fromAddress(address)) as OpenedContract<AceWallet>
    }, [jettonContract])

    useEffect(() => {
        async function getBalance() {
            if (!jettonWalletContract) return
            
            setBalance(null)
            const balance = (await jettonWalletContract.getBalance())
            console.log("balance", balance)
            setBalance(fromNano(balance))

            await sleep(5000)
            getBalance()
        }

        getBalance()
    }, [jettonWalletContract])

    return {
        jettonWalletAddress: jettonWalletContract?.address.toString(),
        balance: balance,
        mint: () => {
            const message: Mint = {
                $$type: "Mint",
                amount: toNano("10")
            }

            jettonContract?.send(
                sender,
                { value: toNano("0.05") },
                message
            )
        }
    }
}