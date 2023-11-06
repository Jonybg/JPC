import React from "react";
import { ProductCard } from "../ProductsCard/ProductsCard"
import { ProductsData } from "../../../data/ProductsData/Productsdata";

export const ProductsWidget = () => {
    return (
        <div className=" flex justify-center  mt-32 " >
            <h2 className="absolute text-white text-6xl my-1">Nuestros Servicios</h2>

            <div className="flex justify-center my-16" >{ProductsData.map((product) => {
                return (


                    <ProductCard key={product.id}{...product} />
                )
            })
            }

            </div>



        </div>
    )
}