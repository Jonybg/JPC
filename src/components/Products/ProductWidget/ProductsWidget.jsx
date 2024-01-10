import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductsCard/ProductsCard"
import { CategorieWidget } from "../../Categories/CategoriesContainer/CategorieWidget"
import { useSelector, useDispatch } from "react-redux";


export const ProductsWidget = () => {
    const [limit, setLimit] = useState(8);
    const products = useSelector(state => state.products.products);
    const selectedCategoryValue = useSelector(state => state.categories.selectedCategory);
    const dispatch = useDispatch();

    useEffect(() => {
        setLimit(8);
    }, [selectedCategoryValue]);

    const handleCategoryClick = (category) => {

        dispatch(selectedCategory(category));
    };

    return (
        <div className="xl:mt-40 mt-30">
            <CategorieWidget onCategoryClick={handleCategoryClick} />
            <h2 className="text-center text-white text-6xl my-1">Nuestros Servicios</h2>
            <div className="flex justify-center h-full">
                <div className="flex flex-col justify-center my-16 2xl:flex-row">
                    {selectedCategoryValue ? (
                        // Solo mostrar productos de la categoría seleccionada
                        products[selectedCategoryValue]?.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    ) : (
                        // Mostrar todos los productos si no hay categoría seleccionada
                        products.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
