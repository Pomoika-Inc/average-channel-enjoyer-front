import React from "react";
import {useDispatch} from "react-redux";
import {Product} from "@/entities/product/model/productTypes";
import {updateProduct} from "@/entities/product/model/productSlice";

interface ApproveProductProps {
    product: Product
}

export const ApproveProduct: React.FC<ApproveProductProps> = ({product}) => {

    const dispatch = useDispatch();

    const approveProductHandler = () => {
        const rejectedProduct: Product = {
            ...product,
            rejectReason: null,
            status: "active"
        };
        dispatch(updateProduct(rejectedProduct))
    }

    return (
        <button onClick={approveProductHandler} className="bg-green-400 p-2 rounded-2xl">Approve product</button>
    )
}