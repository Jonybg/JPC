import React from "react";
import imgAbout from "../../imgs/mother.jpg"

export const About = () => {
    return (
        <div className="flex items-start justify-evenly h-[35rem] ">
            <div className=" max-w-xl flex  flex-col gap-10">
                <h2 className=" text-5xl text-white" > Sobre Nosotros</h2>
                <p className="text-xl text-white">Somos una empresa especializada en reparación de computadoras ubicada en Lomas de Zamora, B. Nuestro equipo de expertos altamente capacitados está comprometido en brindar soluciones rápidas y confiables para todos los problemas informáticos.</p>
                <p className="text-xl text-white" >Con años de experiencia en el campo, nos enorgullece ofrecer un servicio de calidad excepcional, utilizando las últimas herramientas y tecnologías para garantizar la satisfacción de nuestros clientes. Ya sea que necesite una reparación, una actualización o asistencia técnica, estamos aquí para ayudarlo en cada paso del camino.</p>
            </div>

            <img className="w-2/5  h-4/5 rounded-xl" src={imgAbout} alt="" />
        </div>
    )
}