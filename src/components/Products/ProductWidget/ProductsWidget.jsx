import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../ProductsCard/ProductsCard";
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget";
import { setCategory } from "../../../redux/categories/categoriesSlice";
import { Products } from "../../../data/Products";

export const ProductsWidget = () => {
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        dispatch(setCategory("Todas"));
    }, [dispatch]);

    const handleShowMore = () => {
        setLimit(prevLimit => Math.min(prevLimit + 6, Object.values(Products).flat().length));
    };

    const handleShowLess = () => {
        setLimit(prevLimit => Math.max(prevLimit - 5, 3));
    };


    const filteredProducts = Object.values(Products).flat().filter(product =>
        selectedCategory === "Todas" || product.category === selectedCategory
    );

    return (
        <div className="xl:mt-40 mt-30 mb-20">
            <CategorieWidget />
            <h2 className="text-center text-white text-6xl my-1">Nuestros Servicios</h2>
            <div className="flex justify-center h-full">
                <div className="flex flex-wrap justify-center my-16 max-w-[80%]">
                    {filteredProducts.slice(0, limit).map((product) => (
                        <ProductCard {...product} key={product.id} />
                    ))}
                </div>
            </div>
            <div className="xl:flex-row flex flex-col justify-center items-center gap-3">
                <button
                    onClick={handleShowMore}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8"
                >
                    Mostrar más
                </button>
                <button
                    onClick={handleShowLess}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8"
                >
                    Mostrar menos
                </button>
            </div>
        </div>
    );
};
