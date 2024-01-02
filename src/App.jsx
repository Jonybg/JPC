import React from "react";
import { AppRoutes } from "./routes/Routes"
import { HamburguesaMenu } from "./Context/Menu";
import "./index.css"
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
    return (
        < Provider store={store}>
            <PersistGate persistor={persistor}>
                <HamburguesaMenu>
                    <AppRoutes />
                </HamburguesaMenu>
            </PersistGate>

        </Provider>
    )
}