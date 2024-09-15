import "@twa-dev/sdk";
import css from './ChannelListPage.module.css'
import React, {useEffect} from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ProductCard} from "@/entities/product";

export function ChannelPage() {

    useEffect(() => {
    }, []);

    const products = [
        {
            id: 3454353,
            title: "Product 1",
            price: 23,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
        },
        {
            id: 3454353,
            title: "Product 2",
            price: 23,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
        }
    ]

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className="flex flex-col items-center">
                <ul className="flex flex-col w-full p-3 gap-2">
                    {products.map((product) => (
                        <li>
                            <ProductCard product={product} key={product.id}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}