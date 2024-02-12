import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../ProductsCard/ProductsCard";
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget";
import { Products } from "../../../data/Products";

export const ProductsWidget = () => {
    const [limit, setLimit] = useState(8);
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);

    useEffect(() => {
        setLimit(8);
    }, [selectedCategory]);

    return (
        <div className="xl:mt-40 mt-30 mb-20">
            {/* Aquí puedes agregar la barra de navegación o el encabezado de la página */}
            <CategorieWidget />
            <h2 className="text-center text-white text-6xl my-1">Nuestros Servicios</h2>
            <div className="flex justify-center h-full">
                <div className="flex flex-wrap justify-center my-16 max-w-[80%]">
                    {Object.entries(Products).map(([, pc]) =>
                        pc.map((pc) => {
                            if (selectedCategory === "Todas" || pc.category === selectedCategory) {
                                return <ProductCard {...pc} key={pc.id} />;
                            }
                            return null;
                        })
                    ).slice(0, limit)}
                </div>
            </div>

            <div className="xl:flex-row flex flex-col justify-center items-center gap-3">
                <button
                    onClick={() => setLimit(prevLimit => prevLimit + 8)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    Ver más
                </button>
                <button
                    onClick={() => setLimit(prevLimit => Math.max(prevLimit - 10, 8))}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    Ver menos
                </button>
            </div>
        </div>
    );
};
