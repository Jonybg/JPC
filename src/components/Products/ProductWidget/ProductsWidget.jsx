import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../ProductsCard/ProductsCard";
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget";
import { Products } from "../../../data/Products";

export const ProductsWidget = () => {
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        dispatch({ type: 'categories/selectCategory', payload: "Todas" });
    }, [dispatch]);

    const handleShowMore = () => {
        console.log("Mostrar más");
        setLimit(prevLimit => Math.min(prevLimit + 4, Object.values(Products).flat().length));
    };

    const handleShowLess = () => {
        console.log("Mostrar menos");
        setLimit(prevLimit => Math.max(prevLimit - 5, 3));
    };

    console.log("Límite actual:", limit);
    console.log("Categoría seleccionada:", selectedCategory);

    return (
        <div className="xl:mt-40 mt-30 mb-20">
            <CategorieWidget />
            <h2 className="text-center text-white text-6xl my-1">Nuestros Servicios</h2>
            <div className="flex justify-center h-full">
                <div className="flex flex-wrap justify-center my-16 max-w-[80%]">
                    {Object.entries(Products).map(([, pc]) =>
                        pc.map((pc) => {
                            console.log("Categoría del producto:", pc.category);
                            if (selectedCategory === "Todas" || pc.category === selectedCategory) {
                                return <ProductCard {...pc} key={pc.id} />;
                            }
                            return null;
                        })
                    ).flat().slice(0, limit)}
                </div>
            </div>
            <div className="xl:flex-row flex flex-col justify-center items-center gap-3">
                <button
                    onClick={handleShowMore}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    Mostrar más
                </button>
                <button
                    onClick={handleShowLess}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    Mostrar menos
                </button>
            </div>
        </div>
    );
};
