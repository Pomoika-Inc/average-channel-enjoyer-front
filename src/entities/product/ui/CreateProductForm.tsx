import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import styles from './FormStyles.module.scss';
import combine from "classnames";

const productSchema = z.object({
    title: z.string().min(1, "Product title is required"),
    price: z.number().positive("Price should be >= 0"),
    description: z.string().min(1, "Product description is required"),
});

interface ProductFormProp{
    parentClassName: string
}

type ProductFormInputs = z.infer<typeof productSchema>;

export const ProductForm: React.FC<ProductFormProp> = ({parentClassName}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormInputs>({
        resolver: zodResolver(productSchema), // Связываем схему валидации с react-hook-form
    });

    const onSubmit = (data: ProductFormInputs) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={combine(parentClassName, styles.form)}>
            <div className={styles.inputContainer}>
                <label htmlFor="title" className={styles.label}>
                    Product title
                </label>
                <input
                    id="title"
                    {...register("title")}
                    className={styles.input}
                    placeholder="Enter product title"
                />
                {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="description" className={styles.label}>
                    Product description
                </label>
                <input
                    id="description"
                    {...register("description")}
                    className={styles.input}
                    placeholder="Enter product description"
                />
                {errors.description && <p className={styles.error}>{errors.description.message}</p>}
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="price" className={styles.label}>
                    Price
                </label>
                <input
                    id="price"
                    type="number"
                    {...register("price", {valueAsNumber: true})}
                    className={styles.input}
                    placeholder="Enter product price"
                />
                {errors.price && <p className={styles.error}>{errors.price.message}</p>}
            </div>


            <button type="submit" className={styles.button}>
                Create product
            </button>
        </form>
    );
}