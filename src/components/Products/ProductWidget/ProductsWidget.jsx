import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductsCard/ProductsCard"
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget"
import { useSelector } from "react-redux";


export const ProductsWidget = () => {
    const [limit, setLimit] = useState(8);
    let products = useSelector(state => state.products.products);

    const selectedCategory = useSelector(
        state => state.categories.selectedCategory
    );

    const totalProducts = useSelector(state => state.products.totalProducts);

    if (selectedCategory) {
        products = { [selectedCategory]: products[selectedCategory] };
    }

    useEffect(() => {
        setLimit(8);
    }, [selectedCategory]);

    return (

        <div className=" xl:mt-40 mt-30">
            <CategorieWidget />
            <h2 className=" text-center text-white text-6xl my-1 ">Nuestros Servicios</h2>
            <div className=" flex justify-center h-full  " >


                <div className="flex flex-col justify-center my-16 2xl:flex-row " >{products.map((product) => {
                    return (


                        <ProductCard key={product.id}{...product} />
                    )
                })
                }

                </div>



            </div>



        </div>



    )
}