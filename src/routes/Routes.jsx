import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { ProductsWidget } from "../components/Products/ProductWidget/ProductsWidget";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/NavBar/NavBar";

export const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/productos" element={<ProductsWidget />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};
