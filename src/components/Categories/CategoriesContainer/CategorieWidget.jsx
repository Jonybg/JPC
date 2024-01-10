import React from "react";
import { Categories } from "../CategtoriesDiv/Categories";
import { useSelector } from "react-redux";

export const CategorieWidget = () => {
    const categories = useSelector(state => state.categories.categories);
    return (
        <div className="flex flex-col gap-16 mb-20">
            <h2 className="text-center text-white text-5xl">Categorias</h2>
            <div className="flex justify-center gap-20">
                {categories.map((category) => (
                    <Categories key={category.id} {...category} />
                ))}
            </div>
        </div>
    );
};
