export interface Product {
    id: number,
    title: string,
    price: number,
    description?: string,
    image: string | undefined,
    status?: string,//ProductStatus,
    rejectReason?: string | null
}

type ProductStatus = "active" | "waiting_for_approval" | "rejected";
