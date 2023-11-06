import React from "react";

export const ProductCard = ({ img, title, desc }) => {
    return (
        <div className="relative m-11 " >
            <img className=" w-96 h-3/4 rounded-xl  " src={img} />
            <div className="flex gap-11 flex-col max-w-xl absolute top-[260px] left-0 rounded-xl  p-4 text-white text-center bg-slate-900 opacity-75 ">
                <h3 className="  text-4xl font-bold" >{title}</h3>
                <p className="text-2xl  font-bold " >{desc}</p>
            </div>

        </div>
    )

}