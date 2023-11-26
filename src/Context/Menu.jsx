import React from "react";
import { useState, createContext } from "react";


export const MenuHamburguesa = createContext()

export const HamburguesaMenu = ({ children }) => {

    const [menu, setmenu] = useState(false)


    const toggleMenu = () => {
        setmenu(!menu)

    }

    return (
        <MenuHamburguesa.Provider value={{ menu, toggleMenu }} >
            {children}
        </MenuHamburguesa.Provider>
    )

}