import React, {ReactNode, useState} from 'react';
import css from "./Product.module.scss";
import {Product} from "@/entities/product/model/productTypes";
import {Tag} from "@/shared/ui/tags/Tag";
import CoinWithCounter from "@/shared/ui/coin/CoinWithCounter";
import Accordion from "@/shared/ui/accordions/Accordion";

interface ProductCardProps {
    product: Product,
    showTag?: Boolean,
    actionContent?: ReactNode,
    additionalContent?: ReactNode
}

export const ProductCard: React.FC<ProductCardProps> = ({
        product,
        actionContent,
        additionalContent,
        showTag = false
    }) => {
    return (
        <div className="gap-4 items-center border rounded-lg shadow-lg py-3 px-2">
            <div className="grid grid-cols-12 ">
                <div className="col-span-3 flex items-center">
                    <img src={product.image} alt="image"/>
                </div>

                <div className="col-span-6 flex flex-col justify-center h-full px-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                    </div>
                </div>

                <div className="col-span-3 flex flex-col justify-between items-end h-full">
                    {showTag && (
                        <Tag className="py-1 px-1">
                            <span className="text-white">NEW!</span>
                        </Tag>
                    )}
                    <CoinWithCounter counter={product.price}/>
                    {actionContent}
                </div>
            </div>
            <Accordion triggerContent={<span>Read more?</span>} accordionContent={
                <p>
                    {product.description}
                </p>
            }/>

            <div className="mt-3">
                {additionalContent}
            </div>
        </div>
    );
};