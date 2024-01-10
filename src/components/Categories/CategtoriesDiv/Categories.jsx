import React from "react";
import { selectedCategory } from "../../../redux/Categories/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
export const Categories = ({ img, title, category, selected }) => {
    const dispatch = useDispatch();
    const selectedCategoryValue = useSelector(state => state.categories.selectedCategory);

    return (
        <div
            onClick={() => dispatch(selectedCategory(category))}
            className={`${selected ? 'bg-green-500' : 'bg-slate-600'
                } h-[200px] w-[170px] flex flex-col items-center justify-center rounded-xl gap-4 cursor-pointer`}>
            <img className=" mt-3 w-[100px] rounded-xl h-[100px] " src={img} alt={category} />
            <span className=" text-xl text-white" >{title}</span>
        </div>
    );
};
