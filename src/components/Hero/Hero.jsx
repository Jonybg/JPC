import React from "react";
export const Hero = () => {
    return (
        <section className="h-screen  ">
            <div className="hero-pattern bg-cover bg-blend-multiply bg-stone-600 bg-opacity-90 h-full  ">
                <div className="flex justify-start mx-16  " >
                    <div className="flex flex-col  my-56 items-center gap-10" >
                        <h1 className="text-white text-5xl ">Repara tu computadora ahora en <span>JPC</span></h1>
                        <p className="text-white text-3xl " >Expertos en reparacion de computadoras en Lomas de Zamora.</p>
                        <p className="text-white text-3xl " >servicio rapido y confiable</p>

                        <button className="bg-white px-10 py-4  rounded-lg" >Contactar</button>
                    </div>




                </div>
            </div>
        </section>
    )

}