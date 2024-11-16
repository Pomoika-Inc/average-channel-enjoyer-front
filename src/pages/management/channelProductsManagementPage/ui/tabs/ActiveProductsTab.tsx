import React from "react";
import {ProductCard} from "@/entities/product";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";
import {RejectProduct} from "@/features/product/rejectProduct";

interface ActiveProductsTabProps {
}

export const ActiveProductsTab: React.FC<ActiveProductsTabProps> = ({ }) => {

    const products = useSelector((state: RootState) => state.product.products)
    const waitingForApprovalProducts = products.filter(product => product.status === "active")

    return (
        <ul className="flex flex-col w-full p-3 gap-2">
            {waitingForApprovalProducts.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} showTag
                     additionalContent={
                         <div className="flex items-center gap-2">
                             <RejectProduct product={product}/>
                         </div>
                     }
                    />
                </li>
            ))}
        </ul>
    )
}