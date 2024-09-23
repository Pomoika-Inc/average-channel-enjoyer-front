import React, {ReactNode, useState} from 'react';
import css from "./Product.module.scss";
import {Product} from "@/entities/product/model/productTypes";
import {Tag} from "@/shared/ui/tags/Tag";
import CoinWithCounter from "@/shared/ui/coin/CoinWithCounter";
import Accordion from "@/shared/ui/accordions/Accordion";

interface ProductCardProps {
    product: Product,
    actionContent?: ReactNode,
    additionalContent?: Boolean
}

export const ProductCard: React.FC<ProductCardProps> = ({product, actionContent, additionalContent}) => {
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

                    {/*<div className="flex items-center gap-2">*/}
                    {/*    <CoinWithCounter counter={product.price}/>*/}
                    {/*</div>*/}
                </div>

                <div className="col-span-3 flex flex-col justify-between items-end h-full">
                    <Tag className="py-1 px-1">
                        <span className="text-white">NEW!</span>
                    </Tag>
                    <CoinWithCounter counter={product.price}/>
                    {actionContent}
                </div>
            </div>
            <Accordion triggerContent={<span>Read more?</span>} accordionContent={
                <p>
                    W3Schools is optimized for learning and training. Examples might be
                    simplified to improve reading and learning. <br/><br/>Tutorials, references,
                    and examples are constantly reviewed
                    to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree.
                    <br/><br/>
                    To have read and accepted our terms of use, cookie and privacy policy.
                    Copyright 1999-2024 by Refsnes Data.
                    All Rights Reser.
                </p>
            }/>

            <div className="mt-3">
                {additionalContent && (
                    <div className="px-4">
                        <p className="text-xl">Status: <span className="text-green-600">{product.status}</span></p>
                        {product.rejectReason && <span>Reject reason: {product.rejectReason}</span>}
                    </div>
                )}
            </div>
        </div>
    );
};