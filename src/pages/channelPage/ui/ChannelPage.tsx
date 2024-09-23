import "@twa-dev/sdk";
import css from './ChannelPage.module.css'
import React, {useEffect, useState} from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ProductCard} from "@/entities/product";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";

export function ChannelPage() {

    useEffect(() => {
    }, []);

    const products = useSelector((state: RootState) => state.product.products)

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className="flex flex-col items-center">
                <ul className="flex flex-col w-full p-3 gap-2">
                    {products.map((product) => (
                        <li key={product.id}>
                            <ProductCard product={product} showTag actionContent={
                                <div>
                                    <button className="bg-amber-400 p-2 rounded-2xl">Buy</button>
                                </div>
                            }/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}