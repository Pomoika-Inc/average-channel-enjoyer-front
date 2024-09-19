export interface Product {
    id: number,
    groupId: number,
    title: string,
    price: number,
    qty: number,
    description?: string,
    image: string | undefined,
    status?: string,//ProductStatus,
    rejectReason?: string | null
}

type ProductStatus = "active" | "waiting_for_approval" | "rejected"
export type ProductActionType = "creating" | "updating"
