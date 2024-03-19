import React from "react";
import { useNavigate } from "react-router";
import { ProductsWidget } from "../Products/ProductWidget/ProductsWidget";
import chica from "../../imgs/chica.jpg";

export const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="xl:h-screen mb-auto h-1/4 ">
                <div className="hero-pattern bg-cover bg-blend-multiply bg-stone-600 bg-opacity-90 xl:h-full h-3/4 flex justify-center items-center">
                    <div className="mx-16 text-center">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-white text-5xl">Repara tu computadora ahora en <span className="text-green-500">JPC</span></h1>
                            <p className="text-white text-3xl">Expertos en reparación de computadoras en Lomas de Zamora.</p>
                            <p className="text-white text-3xl">Servicio rápido y confiable.</p>
                            <p className="text-white">En JPC, ofrecemos soluciones integrales para todos tus problemas informáticos.</p>
                            <div className="flex flex-col items-center">
                                <img src={chica} className="w-40 h-40 rounded-full mr-4" />
                                <p className="text-white italic">
                                    "¡Rápido, confiable y profesional! JPC salvó mi computadora." - Cliente satisfecho
                                </p>
                            </div>
                            <button onClick={() => navigate("contact")} className=" m-3 bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">Contactate con nosotros!</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <ProductsWidget />
            </section>
        </>
    );
};
