import React, { useState, createContext } from "react";

export const MenuHamburguesa = createContext();

export const HamburguesaMenu = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
        setCart(false);
    };

    const toggleCart = () => {
        setCart(!cart);
        setMenu(false);
    };

    return (
        <MenuHamburguesa.Provider value={{ menu, toggleMenu, toggleCart, cart }}>
            {children}
        </MenuHamburguesa.Provider>
    );
};
