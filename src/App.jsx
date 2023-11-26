import React from "react";
import { AppRoutes } from "./routes/Routes"
import { HamburguesaMenu } from "./Context/Menu";
import "./index.css"

export const App = () => {
    return (
        <HamburguesaMenu>
            <div className="bg-slate-700" >
                <AppRoutes />
            </div>
        </HamburguesaMenu>

    )
}