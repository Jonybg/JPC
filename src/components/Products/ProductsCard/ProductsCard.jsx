import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";

export const ProductCard = ({ img, title, price }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ img, title, price }));
    };

    return (
        <div className="max-w-sm m-11 border-2 bg-slate-500 flex flex-col justify-center items-center gap-3">
            <img className="mt-3 w-48 rounded-xl h-[200px]" src={img} alt={title} />
            <div className="flex gap-5 flex-col rounded-xl p-4 text-white text-center">
                <h3 className="text-4xl font-bold">{title}</h3>
                <p className="text-2xl font-bold">{price}</p>
                <div>
                    <button
                        onClick={handleAddToCart}
                        className="bg-white py-3 w-32 rounded-xl text-black"
                    >
                        Añadir Al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};