import React, {ReactNode} from 'react';
import {Order} from "@/entities/order/model/orderTypes";

interface OrderCardProps {
    order: Order,
    actionContent?: ReactNode,
    productsContent?: ReactNode
}

export const OrderCard: React.FC<OrderCardProps> = ({order, actionContent, productsContent}) => {

    const convertDate = (date: string) =>  new Date(date).toLocaleDateString();

    const channelApproval = () => {
        if(!order.channelApprove.approvedAt) return "not yet"
        return convertDate(order.channelApprove.approvedAt)
    }

    const userApproval = () => {
        if(!order.userApprove.approvedAt) return "not yet"
        return convertDate(order.userApprove.approvedAt)
    }


    return (
        <div className="gap-4 items-center border rounded-lg shadow-lg py-4 px-2">
            <div className="grid grid-cols-12 ">

                <div className="col-span-12 flex flex-col justify-center h-full px-3">
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold">
                            <span>Ordered at: </span>
                            <span>{convertDate(order.createdAt)}</span>
                        </p>

                        <p className="mt-2 text-lg">
                            <span>Channel approval: </span>
                            <span>{channelApproval()}</span>
                        </p>

                        <p className="text-lg">
                            <span>Your approval: </span>
                            <span>{userApproval()}</span>
                        </p>

                        {order.finishedAt && (
                            <span className="text-green-600 text-xl mt-1">Completed!</span>
                        )}

                    </div>

                </div>

                <div className="col-span-12 flex py-3">
                    {productsContent}
                </div>

                <div className="col-span-12 flex">
                    {actionContent}
                </div>
            </div>
        </div>
    )
}