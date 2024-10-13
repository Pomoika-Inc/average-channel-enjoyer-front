import "@twa-dev/sdk";
import React from "react";
import {useDispatch} from "react-redux";
import {removeProduct} from "@/entities/product/model/productSlice";
import Modal from "@/shared/ui/modal/Modal";
import {Product} from "@/entities/product/model/productTypes";
import * as Dialog from "@radix-ui/react-dialog";

interface RemoveModalProp {
    product: Product
}

export const RemoveModal: React.FC<RemoveModalProp> = ({product}) => {

    const dispatch = useDispatch();

    const removeProductHandler = (productId: number) => {
        dispatch(removeProduct(productId));
    }

    return (
        <Modal triggerContent={
            <p className="bg-amber-400 p-2 rounded-2xl">
                Remove
            </p>
        }
           modalContent={
               <div className="flex flex-col items-center text-center">
                   <p>Are you sure you want to remove product </p>
                   <p className="font-bold">{product.title}</p>
                   <div className="flex justify-center items-center gap-3 mt-3">
                       <button onClick={() => removeProductHandler(product.id)}
                               className="bg-red-500 p-2 rounded-2xl">
                           Remove
                       </button>
                       <Dialog.Close asChild>
                           <button className="bg-cyan-300 p-2 rounded-2xl">
                               Cancel
                           </button>
                       </Dialog.Close>
                   </div>
               </div>
           }
        />
    )
}
