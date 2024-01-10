import React from "react";
import { useNavigate } from "react-router";
import { ProductsWidget } from "../Products/ProductWidget/ProductsWidget";

export const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="xl:h-screen mb-auto h-1/4">
                <div className="hero-pattern bg-cover bg-blend-multiply bg-stone-600 bg-opacity-90 xl:h-full h-3/4">
                    <div className="flex justify-center xl:justify-start mx-16">
                        <div className="flex flex-col text-center my-56 items-center gap-6">
                            <h1 className="text-white text-5xl">Repara tu computadora ahora en <span className="text-green-500">JPC</span></h1>
                            <p className="text-white text-3xl">Expertos en reparación de computadoras en Lomas de Zamora.</p>
                            <p className="text-white text-3xl">Servicio rápido y confiable.</p>
                            <p className="text-white">En JPC, ofrecemos soluciones integrales para todos tus problemas informáticos.</p>
                            <blockquote className="text-white italic">
                                <img src="src/imgs/pexels-andrea-piacquadio-774909.jpg" alt="Cliente Satisfecho" className="w-40 h-40 rounded-full mx-auto  " />
                                "¡Rápido, confiable y profesional! JPC salvó mi computadora." - Cliente satisfecho
                            </blockquote>
                            <button onClick={() => navigate("contact")} className="bg-green-500 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full mt-8">Contactate con nosotros!</button>
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


