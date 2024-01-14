import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../CategtoriesDiv/Categories.jsx";
import { Products } from "../../../data/Products.js";

export const CategorieWidget = () => {
    const categories = useSelector((state) => state.categories.categories);
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);


    const allCategories = [
        {
            id: "all",
            title: "Todas",
            img: "src/imgs/pc.jpg",
        },
        ...categories,
    ];

    return (
        <div className="flex flex-col gap-16 mb-20">
            <h2 className="text-center text-white text-5xl">Categorias</h2>
            <div className=" flex-col lg:flex-row items-center flex justify-center gap-20">
                {allCategories.map((category) => (
                    <Categories
                        key={category.id}
                        {...category}
                        selected={selectedCategory === category.category}
                    />
                ))}
            </div>
        </div>
    );
};
