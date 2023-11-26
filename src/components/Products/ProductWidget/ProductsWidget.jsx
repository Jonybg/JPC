import React from "react";
import { ProductCard } from "../ProductsCard/ProductsCard"
import { ProductsData } from "../../../data/ProductsData/Productsdata";

export const ProductsWidget = () => {
    return (

        <div className=" xl:mt-40 mt-30">
            <h2 className=" text-center text-white text-6xl my-1 ">Nuestros Servicios</h2>
            <div className=" flex justify-center h-full  " >


                <div className="flex flex-col justify-center my-16 2xl:flex-row " >{ProductsData.map((product) => {
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