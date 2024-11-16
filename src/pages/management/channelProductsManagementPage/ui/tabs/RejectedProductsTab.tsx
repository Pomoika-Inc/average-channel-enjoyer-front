import React from "react";
import {ProductCard} from "@/entities/product";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";
import {UpdateRejectReason} from "@/features/product/updateRejectReason";
import {ApproveProduct} from "@/features/product/approveProduct";

interface PendingProductsTabProps {
}

export const RejectedProductsTab: React.FC<PendingProductsTabProps> = ({}) => {

    const products = useSelector((state: RootState) => state.product.products)
    const waitingForApprovalProducts = products.filter(product => product.status === "rejected")

    return (
        <ul className="flex flex-col w-full p-3 gap-2">
            {waitingForApprovalProducts.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} showTag actionContent={
                        <div className="mt-2">
                            <ApproveProduct product={product} />
                        </div>
                    }
                     additionalContent={
                         <div className="flex items-center gap-2">
                             <UpdateRejectReason product={product}/>
                         </div>
                     }
                    />
                </li>
            ))}
        </ul>
    )
}