import React from "react";
import { Navbar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { ProductsWidget } from "./components/Products/ProductWidget/ProductsWidget";
import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/Footer/Footer";
import "./index.css"

export const App = () => {
    return (
        <div className="bg-slate-700" >
            <Navbar />
            <Hero />
            <About />
            <ProductsWidget />
            <Contact />
            <Footer />
        </div>
    )
}