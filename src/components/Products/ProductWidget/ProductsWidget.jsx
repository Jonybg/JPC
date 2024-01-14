import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductsCard/ProductsCard";
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget"
import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../../../redux/categories/categoriesSlice"

export const ProductsWidget = () => {
    const [limit, setLimit] = useState(8);
    const products = useSelector((state) => state.products.products);
    const selectedCategoryValue = useSelector((state) => state.categories.selectedCategory);
    const dispatch = useDispatch();


    useEffect(() => {
        setLimit(8);
    }, [selectedCategoryValue]);

    const handleCategoryClick = (category) => {
        dispatch(selectedCategory(category));
    };

    const filteredProducts =
        selectedCategoryValue && products[selectedCategoryValue]
            ? products[selectedCategoryValue]
            : products.flat();

    return (
        <div className="xl:mt-40 mt-30 mb-20 ">
            <CategorieWidget onCategoryClick={handleCategoryClick} />
            <h2 className="text-center text-white text-6xl my-1">Nuestros Servicios</h2>
            <div className="flex justify-center h-full">
                <div className="flex flex-col justify-center my-16 2xl:flex-row">
                    {filteredProducts.slice(0, limit).map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
            <div className=" xl:flex-row flex flex-col justify-center items-center gap-3">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    {" "}
                    ver mas{" "}
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    {" "}
                    ver menos{" "}
                </button>
            </div>
        </div>
    );
};