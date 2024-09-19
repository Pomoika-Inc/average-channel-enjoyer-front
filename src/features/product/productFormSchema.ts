import {z} from "zod";

export const productFormSchema = z.object({
    title: z.string().min(1, "Product title is required"),
    price: z.number().positive("Price should be >= 0"),
    qty: z.number().positive("Qty should be >= 0"),
    description: z.string().min(1, "Product description is required"),
});