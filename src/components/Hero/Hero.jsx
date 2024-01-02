import React from "react";
import { useNavigate } from "react-router";

export const Hero = () => {
    const navigate = useNavigate()
    return (
        <section className="xl:h-screen  mb-auto  h-1/4 ">
            <div className="hero-pattern bg-cover bg-blend-multiply bg-stone-600 bg-opacity-90 xl:h-full h-3/4  ">
                <div className="flex justify-center xl:justify-start mx-16  " >
                    <div className="flex flex-col text-center my-56 items-center gap-6" >
                        <h1 className="text-white text-5xl ">Repara tu computadora ahora en <span>JPC</span></h1>
                        <p className="text-white text-3xl " >Expertos en reparacion de computadoras en Lomas de Zamora.</p>
                        <p className="text-white text-3xl " >servicio rapido y confiable</p>

                        <button onClick={() => navigate("contact")} className="bg-white px-10 py-4  rounded-lg" >Contactar</button>
                    </div>




                </div>
            </div>
        </section>
    )

}