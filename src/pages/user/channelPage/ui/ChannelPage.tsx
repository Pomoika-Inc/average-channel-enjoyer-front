import React, {useEffect, useState} from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ProductCard} from "@/entities/product";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";
import {Product} from "@/entities/product/model/productTypes";
import {Search} from "@/shared/ui/search/Search";

export function ChannelPage() {

    useEffect(() => {
    }, []);

    const products = useSelector((state: RootState) => state.product.products)
    const [searchedProducts, setSearchedProducts] = useState<Product[]>(products)
    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>

            <Search listToSearchIn={products}
                    propertyNameToSearchBy="title"
                    onSearchedChange={setSearchedProducts}
                    parentClassName="my-4 px-4"
            />

            <div className="flex flex-col items-center">
                <ul className="flex flex-col w-full p-3 gap-2">
                    {searchedProducts.map((product) => (
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