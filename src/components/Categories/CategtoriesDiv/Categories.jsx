import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/categories/categoriesSlice";

export const Categories = ({ img, title, category }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);

    const handleClick = () => {
        dispatch(setCategory(category));
    };

    const isSelected = category === selectedCategory || (selectedCategory === null && category === "Todas");

    return (
        <div
            onClick={handleClick}
            className={`${isSelected ? "bg-green-500" : "bg-slate-600"
                } h-[200px] w-[170px] flex flex-col items-center justify-center rounded-xl gap-4 cursor-pointer`}
        >
            <img
                className=" mt-3 w-[100px] rounded-xl h-[100px] "
                src={img}
                alt={category}
            />
            <span className=" text-xl text-white">{title}</span>
        </div>
    );
};
