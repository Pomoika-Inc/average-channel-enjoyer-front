import "@twa-dev/sdk";
import css from './ProductsAdministrationPage.module.css'
import React, {useEffect} from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ProductCard} from "@/entities/product";
import Popover from "@/shared/ui/popover/Popover";

export function ProductsAdministrationPage() {

    useEffect(() => {
    }, []);

    const products = [
        {
            id: 3454353,
            title: "Product 1",
            price: 23,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
            status: "active",
            rejectReason: null
        },
        {
            id: 76543,
            title: "Product 2",
            price: 23,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
            status: "active",
            rejectReason: null
        },
        {
            id: 53434,
            title: "Product 3",
            price: 23,
            description: "This is the best product you have even seen",
            image: "/images/channelAva1.png",
            status: "rejected",
            rejectReason: "Potomu chto"
        }
    ]

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className="flex flex-col items-center">
                <ul className="flex flex-col w-full p-3 gap-2">
                    {products.map((product) => (
                        <li>
                            <ProductCard additionalContent product={product} key={product.id} actionContent={
                                <div className="flex gap-2">
                                    <button className="bg-amber-400 p-2 rounded-2xl">Remove</button>

                                    <Popover triggerElement={<button className="bg-indigo-600 p-2 rounded-2xl">Edit</button>}
                                        content={
                                            <div className="text-white">
                                                <p>
                                                    <span>At the moment it's not possible to edit products directly. </span>
                                                    <span>In order to do edit, you need to create a new product based on this one following this link.</span>
                                                </p>
                                            </div>
                                        }
                                    />
                                </div>
                            }/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}