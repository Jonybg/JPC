import React from "react";
export const Footer = () => {
    return (
        <footer className=" bg-slate-700 top-1 w-full h-1/4">
            <div className="  m-3 flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-2 text-white text-md">
                <a href="#">Soporte</a>
                <a href="#">Terminos de uso</a>
                <a href="#">Trabaja con nosotros</a>
            </div>
            <span className="flex justify-center text-white text-md"> 2023 Copyrigth:JPC.com</span>

        </footer>
    )
}