import React from "react";


export const Submit = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
    }

    return <input onClick={(e) => handleSubmit(e)} type="submit" className="cursor-pointer bg-green-500 py-3 px-10 rounded-xl" />
}