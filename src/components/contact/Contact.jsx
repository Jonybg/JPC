import React from "react";

export const Contact = () => {
    return (
        <div className="w-3/4 lg:w-1/4 m-auto h-[600px]">

            <form className="p-[40px] m-auto flex flex-col justify-center items-center border-2 rounded-3xl">
                <label htmlFor="nombre" className="text-white text-xl mb-5" >Nombre:</label>
                <input type="text" name="nombre" className=" sm:w-3/4 w-full p-3 mb-5 text-md" /> <br />
                <label htmlFor="email" className="text-white text-xl mb-5">Email:</label>
                <input type="email" name="email" className="sm:w-3/4 w-full p-3 mb-5 text-md" />
                <label className="text-white text-xl mb-5" htmlFor="">Observaciones:</label>
                <textarea name="" id="" cols="15" rows="2" className="w-full py-5 mb-10 text-md" ></textarea>
                <input type="submit" className=" cursor-pointer bg-green-500 py-3 px-10 rounded-xl" />
            </form>

        </div>

    )

}
