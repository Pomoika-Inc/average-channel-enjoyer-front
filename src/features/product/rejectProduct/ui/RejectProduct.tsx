import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "@/entities/product/model/productTypes";
import {updateProduct} from "@/entities/product/model/productSlice";

interface RejectProductProps {
    product: Product
}

export const RejectProduct: React.FC<RejectProductProps> = ({product}) => {

    const [rejectReason, setRejectReason] = useState<string>('')
    const dispatch = useDispatch();

    const rejectMessageHandler = (event: string) => {
        setRejectReason(event)
    }
    const rejectProductHandler = () => {
        const rejectedProduct: Product = {
            ...product,
            rejectReason: rejectReason,
            status: "rejected"
        };
        dispatch(updateProduct(rejectedProduct))
    }

    return (
        <>
            <button onClick={rejectProductHandler} className="bg-red-400 p-2 rounded-2xl">Reject product</button>
            <textarea className="border-2 w-full mt-2"
                      value={rejectReason} onChange={event => rejectMessageHandler(event.target.value)}
                      placeholder="Reject reason"
            />
        </>
    )
}