import React, {useState} from "react";
import {Product} from "@/entities/product/model/productTypes";
import {updateProduct} from "@/entities/product/model/productSlice";
import {useDispatch} from "react-redux";

interface UpdateRejectReasonProps {
    product: Product
}

export const UpdateRejectReason: React.FC<UpdateRejectReasonProps> = ({product}) => {

    const [rejectReason, setRejectReason] = useState<string | null>(product.rejectReason)
    const dispatch = useDispatch();

    const rejectMessageHandler = (event: string) => {
        setRejectReason(event)
    }

    const updateRejectHandler = () => {
        const updatedProduct: Product = {
            ...product,
            rejectReason: rejectReason
        };
        dispatch(updateProduct(updatedProduct))
    }

    return (
        <>
            <button onClick={updateRejectHandler} className="bg-red-400 p-2 rounded-2xl">Reject product</button>
            <textarea className="border-2 w-full mt-2"
                      value={rejectReason ? rejectReason : ''} onChange={event => rejectMessageHandler(event.target.value)}
                      placeholder="Reject reason"
            />
        </>
    )
}