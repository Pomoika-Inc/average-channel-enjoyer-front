import "@twa-dev/sdk";
import css from './ProductsAdministrationPage.module.css'
import React, {useEffect, useState} from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ProductCard} from "@/entities/product";
import Popover from "@/shared/ui/popover/Popover";
import {ChannelCard} from "@/entities/channel";
import {Link} from "react-router-dom";
import {Product, ProductActionType} from "@/entities/product/model/productTypes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/appStore";
import {ProductForm} from "@/features/product/ui/CreateProductForm";
import Accordion from "@/shared/ui/accordions/Accordion";
import {removeProduct} from "@/entities/product/model/productSlice";
import Modal from "@/shared/ui/modal/Modal";
import {RemoveModal} from "@/pages/productsAdministrationPage/ui/RemoveModal";
import {Filter} from "@/shared/ui/filter/Filter";
import {Search} from "@/shared/ui/search/Search";

export function ProductsAdministrationPage() {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isFormOpenProgrammatically, setFormOpenProgrammatically] = useState<Boolean>(false)
    const [actionType, setActionType] = useState<ProductActionType>("creating")
    const [isTipBlockOpen, setTipBlockOpen] = useState<Boolean>(true)
    const products = useSelector((state: RootState) => state.product.products)
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
    const [searchedProducts, setSearchedProducts] = useState<Product[]>(filteredProducts)


    // const [isFormOpenByClick, setFormOpenByClick] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setTipBlockOpen(true)
    }, [isFormOpenProgrammatically])

    const copyProductHandler = (product: Product) => {
        setSelectedProduct(product)
        if (actionType !== "creating") setActionType('creating')
        setFormOpenProgrammatically(true)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const updateProductHandler = (product: Product) => {
        setSelectedProduct(product)
        if (actionType !== "updating") setActionType('updating')
        setFormOpenProgrammatically(true)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const formOpenByClickHandler = (isOpen: boolean) => {
        setTimeout(() => {
            setFormOpenProgrammatically(isOpen)
        }, 100)
    };

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className="flex flex-col items-center">

                <Accordion onToggle={formOpenByClickHandler} isWithArrow={false} parentClassName="mt-6"
                    // @ts-ignore
                           isOpen={isFormOpenProgrammatically}
                           triggerContent={
                               <div className="flex justify-center items-center gap-2">
                                   <p className="bg-indigo-600 p-2 rounded-2xl text-white text-xl font-semibold">
                                       New product
                                   </p>
                               </div>
                           }
                           accordionContent={
                               <>
                                   {isTipBlockOpen && actionType === "updating" && (
                                       <div
                                           className="flex flex-col items-center mx-1 px-6 py-4 text-amber-600 border-2 border-amber-600 border-solid rounded-2xl">
                                           <p>
                                               <span>At the moment it's not possible to update products directly. </span>
                                               <span>It will create a new product based on the base one. The old one will be remove. Some data will ve migrated. </span>
                                           </p>
                                           <button onClick={() => setTipBlockOpen(false)}
                                                   className="mt-3 p-2 text-white bg-amber-600 rounded-2xl">
                                               I understand
                                           </button>
                                       </div>
                                   )}

                                   {isTipBlockOpen && actionType === "creating" && (
                                       <div
                                           className="flex flex-col items-center mx-1 px-6 py-4 text-green-700 border-2 border-green-700 border-solid rounded-2xl">
                                           <p>
                                               <span>It will create a new product. There are no relation to any products.</span>
                                           </p>
                                           <button onClick={() => setTipBlockOpen(false)}
                                                   className="mt-3 p-2 text-white bg-green-700 rounded-2xl">
                                               I understand
                                           </button>
                                       </div>
                                   )}
                                   <ProductForm setSelectedProductCallback={setSelectedProduct}
                                                defaultActionType={actionType}
                                                setActionTypeCallback={setActionType}
                                                baseProduct={selectedProduct}
                                                parentClassName="w-full p-6 mt-3"
                                   />
                               </>
                           }
                />


                <div className="flex justify-between items-center w-full gap-3 mt-6 px-4">
                        {/*<p className="py-1">Filter</p>*/}
                        <Search listToSearchIn={filteredProducts}
                                propertyNameToSearchBy="title"
                                onSearchedChange={setSearchedProducts}/>
                        <Filter filterOptions={[{name: 'active', value: 'active'}, {
                            name: 'rejected',
                            value: 'rejected'
                        }, {name: 'waiting for approval', value: 'waiting_for_approval'}]}
                                listToFilter={products}
                                onFilterChange={setFilteredProducts}
                                propertyNameToFilterBy="status"
                        />
                </div>

                <ul className="flex flex-col w-full p-3 gap-2 mt-3">
                    {searchedProducts.map((product) => (
                        <li key={product.id}>
                            <ProductCard additionalContent product={product} actionContent={
                                <div className="flex flex-col py-3 gap-2">

                                    <RemoveModal product={product}/>
                                    <button onClick={() => copyProductHandler(product)}
                                            className="bg-indigo-600 p-2 rounded-2xl">
                                        Copy
                                    </button>
                                    <button onClick={() => updateProductHandler(product)}
                                            className="bg-fuchsia-500 p-2 rounded-2xl">
                                        update
                                    </button>
                                </div>
                            }/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

// <Popover triggerElement={<button className="bg-indigo-600 p-2 rounded-2xl">Edit</button>}
//          content={
//              <div className="text-white">
//                  <p>
//                      <span>At the moment it's not possible to edit products directly. </span>
//                      <span>In order to do edit, you need to create a new product based on this one following this link.</span>
//                  </p>
//              </div>
//          }
// />