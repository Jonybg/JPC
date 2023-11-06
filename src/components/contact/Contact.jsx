import React from "react";

export const Contact = () => {
    return (
        <div className="flex">
            <div className="border-2"></div>
            <div className=" flex justify-center items-center h-[500px] gap-28" >
                <div className="w-full md:w-1/2 flex flex-col gap-10 ml-20">
                    <h3 className="text-white text-5xl">Ponte en contacto</h3>
                    <p className="text-white text-2xl" >Comunícate con nosotros utilizando el formulario de contacto a continuación. Esperamos con ansias escucharte y ayudarte con tus necesidades de construcción.</p>
                </div>
                <div className="w-full md:w-1/2" >
                    <form className=" flex flex-col gap-4  " action="">
                        <div className="flex gap-36 w-2/4 ">
                            <div className=" mb-3">
                                <label className="text-white text-lg " htmlFor="nombre">Nombre:</label>
                                <input className=" bg-red-100 rounded-md w-[300px] h-9 mt-2" type="text" />
                            </div>
                            <div>
                                <label className="text-white text-lg" htmlFor="Email">Email:</label>
                                <input className=" bg-red-100 rounded-md w-[300px] h-9 mt-2" type="email" />
                            </div>

                        </div>



                        <label className="text-lg text-white" htmlFor="mensaje">Mensaje:</label>
                        <textarea className="  bg-red-100 rounded-md w-[750px]" name="mensaje" cols="10" rows="5"></textarea>
                        <div className="flex  ">
                            <input className=" w-48 ml-[560px] py-4 cursor-pointer rounded-xl bg-lime-500" type="submit" />
                        </div>

                    </form>

                </div>
            </div>
        </div>



    )

}