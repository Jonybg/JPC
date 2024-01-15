import { Products } from "../../../data/Products";
import { ProductCard } from "../ProductsCard/ProductsCard";
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProductsWidget = () => {
    const [limit, setLimit] = useState(8);
    let products = useSelector((state) => state.products.products);
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);

    useEffect(() => {
        setLimit(8);
    }, [selectedCategory]);

    return (
        <div className="xl:mt-40 mt-30 mb-20 ">
            <CategorieWidget />
            <h2 className="text-center text-white text-6xl my-1">Nuestros Servicios</h2>
            <div className="flex justify-center h-full">
                <div className="flex flex-wrap justify-center my-16  max-w-[80%]">
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
                    {" "}
                    ver más{" "}
                </button>
                <button
                    onClick={() => setLimit(prevLimit => Math.max(prevLimit - 10))}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">
                    {" "}
                    ver menos{" "}
                </button>
            </div>
        </div>
    );
};