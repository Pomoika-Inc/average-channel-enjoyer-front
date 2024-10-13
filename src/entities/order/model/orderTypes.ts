import {Product} from "@/entities/product/model/productTypes";

export interface Order {
    id: number,
    createdAt: string,
    finishedAt: string | null,

    userApprove: {
        approvedAt: null | string
    }
    channelApprove: {
        approvedAt: null | string
    }

    products: Product[]
}