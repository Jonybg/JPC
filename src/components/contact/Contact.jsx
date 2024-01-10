import { useFormik } from "formik";
import React, { useState } from "react";
import { Submit } from "./submit/Submit";
import * as Yup from "yup";

export const Contact = () => {
    const phoneRegex = /\d{10}$/;
    const validationSchema = Yup.object({
        name: Yup.string().required("El nombre es requerido"),
        numero: Yup.string().matches(phoneRegex, "Número de celular inválido").required("El número es requerido"),
        email: Yup.string().email("Email inválido").required("El Email es requerido"),
        comments: Yup.string().required("Por favor escriba alguna observación"),
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { getFieldProps, handleSubmit, touched, errors, resetForm } = useFormik({
        validationSchema,
        initialValues: {
            name: "",
            numero: "",
            email: "",
            comments: "",
        },

        onSubmit: (values) => {
            console.log(values);
            resetForm();
            setFormSubmitted(true);

            setTimeout(() => {
                setFormSubmitted(false);
            }, 2000);
        },
    });

    return (
        <div className="w-2/4 lg:w-2/4 xl:w-1/4 m-auto min-h-[730px] xl:min-h-screen ">
            <form className="p-[40px] m-auto flex flex-col justify-center items-center border-2 rounded-3xl">
                {formSubmitted && (
                    <div className="text-green-500 text-xl mb-5">¡El formulario se envió con éxito!</div>
                )}
                <label htmlFor="nombre" className="text-white text-xl mb-5">
                    Nombre:
                </label>
                <input
                    {...getFieldProps("name")}
                    type="text"
                    name="name"
                    className={`sm:w-3/4 w-full p-3 mb-2 text-md ${touched.name && errors.name ? 'border-red-500' : ''}`}
                />
                {touched.name && errors.name && <span className="text-red-500 text-sm">{errors.name}</span>} <br />

                <label htmlFor="numero" className="text-white text-xl mb-5">
                    Teléfono:
                </label>
                <input
                    {...getFieldProps("numero")}
                    type="text"
                    name="numero"
                    className={`sm:w-3/4 w-full p-3 mb-2 text-md ${touched.numero && errors.numero ? 'border-red-500' : ''}`}
                />
                {touched.numero && errors.numero && <span className="text-red-500 text-sm">{errors.numero}</span>} <br />

                <label htmlFor="email" className="text-white text-xl mb-5">
                    Email:
                </label>
                <input
                    {...getFieldProps("email")}
                    type="email"
                    name="email"
                    className={`sm:w-3/4 w-full p-3 mb-2 text-md ${touched.email && errors.email ? 'border-red-500' : ''}`}
                />
                {touched.email && errors.email && <span className="text-red-500 text-sm">{errors.email}</span>} <br />

                <label className="text-white text-xl mb-5 mt-10" htmlFor="">
                    Observaciones:
                </label>
                <textarea
                    {...getFieldProps("comments")}
                    name="comments"
                    id="comments"
                    cols="15"
                    rows="2"
                    className={`w-full py-5 mb-2 text-md ${touched.comments && errors.comments ? 'border-red-500' : ''}`}
                ></textarea>
                {touched.comments && errors.comments && <span className="text-red-500 text-sm">{errors.comments}</span>} <br />

                <Submit onSubmit={handleSubmit} />
            </form>
        </div>
    );
};

