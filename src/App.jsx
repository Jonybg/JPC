import React from "react";
import { AppRoutes } from "./routes/Routes"
import { HamburguesaMenu } from "./Context/Menu";
import "./index.css"

export const App = () => {
    return (
        <HamburguesaMenu>
            <AppRoutes />
        </HamburguesaMenu>

    )
}