export const Products = [
    {
        id: 1,
        title: "Reparacion de HardWare",
        price: "$500",
        img: "https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyOHx8Q29tcHV0ZXIlMjBSZXBhaXJ8ZW58MHx8fHwxNjk4NzkwOTYzfDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 2,
        title: "Eliminacion de virus y mas",
        price: "$1000",
        img: "https://images.unsplash.com/photo-1601791074012-d4e0ee30d9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNHx8Q29tcHV0ZXIlMjBSZXBhaXJ8ZW58MHx8fHwxNjk4NzkwOTYzfDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 3,
        title: "Soporte técnico remoto",
        price: "$1500",
        img: "https://images.unsplash.com/photo-1562758778-9f5ba22c8bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyMnx8Q29tcHV0ZXIlMjBSZXBhaXJ8ZW58MHx8fHwxNjk4NzkwOTYzfDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
];

export const TotalProducts = Products.length;

export const categorizedProducts = Products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }

    acc[product.category] = [...acc[product.category], product];

    return acc;
}, {});
