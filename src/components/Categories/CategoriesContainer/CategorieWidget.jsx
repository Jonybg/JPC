import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../redux/categories/categoriesSlice";
import { Categories as data } from "../../../data/Categories.js";
import { Categories } from "../CategtoriesDiv/Categories.jsx";

export const CategorieWidget = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategory("Todas"));
    }, [dispatch]);

    return (
        <div className="flex flex-col gap-16 mb-20 ">
            <h2 className="text-center text-white text-5xl">Categorias</h2>
            <div className=" flex-wrap lg:flex-row items-center flex justify-center gap-20">
                {data.map((category) => (
                    <Categories
                        key={category.id}
                        {...category}
                    />
                ))}
            </div>
        </div>
    );
};
