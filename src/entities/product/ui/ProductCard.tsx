import React, {useState} from 'react';
import css from "./Product.module.scss";
import {Product} from "@/entities/product/model/productTypes";

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center gap-1">

        </div>
    );
};

export default ProductCard;
