import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import styles from './FormStyles.module.scss';
import combine from "classnames";
import {Product, ProductActionType} from "@/entities/product/model/productTypes";
import {productFormSchema} from "@/features/product/createProduct/productFormSchema";

interface ProductFormProp {
    defaultActionType: ProductActionType,
    setActionTypeCallback: Function,
    setSelectedProductCallback: Function,
    parentClassName?: string,
    baseProduct?: Product | null
}

type ProductFormInputs = z.infer<typeof productFormSchema>;

export const ProductForm: React.FC<ProductFormProp> = ({
       parentClassName,
       baseProduct,
       defaultActionType,
       setSelectedProductCallback,
       setActionTypeCallback
   }) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<ProductFormInputs>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            title: baseProduct?.title || '',
            price: baseProduct?.price || 0,
            qty: baseProduct?.qty || 0,
            description: baseProduct?.description || '',
        },
    });

    useEffect(() => {
        if (baseProduct) {
            reset({
                title: baseProduct.title || '',
                price: baseProduct.price || 0,
                qty: baseProduct.price || 0,
                description: baseProduct.description || '',
            });
        }
    }, [baseProduct, reset]);

    const onSubmit = (data: ProductFormInputs) => {
        if (defaultActionType === "creating") {
            console.log('totally new product')
        }
        if (defaultActionType === "updating") {
            console.log('new product based, group id:', baseProduct?.groupId)
        }
        clearForm()
    };

    const clearForm = () => {
        reset({
            title: '',
            price: 0,
            qty: 0,
            description: '',
        });

        setActionTypeCallback("creating")
        setSelectedProductCallback(null)
    }

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

            <div className={styles.inputContainer}>
                <label htmlFor="qty" className={styles.label}>
                    Qty
                </label>
                <input
                    id="qty"
                    type="number"
                    {...register("qty", {valueAsNumber: true})}
                    className={styles.input}
                    placeholder="Enter product qty"
                />
                {errors.qty && <p className={styles.error}>{errors.qty.message}</p>}
            </div>

            <div className="flex justify-center items-center gap-2">
                <button type="submit" className={`${styles.button} bg-indigo-600`}>
                    Create
                </button>
                <button onClick={() => clearForm()} className={`${styles.button} bg-red-500`}>
                    Clear the form
                </button>
            </div>

        </form>
    );
}
