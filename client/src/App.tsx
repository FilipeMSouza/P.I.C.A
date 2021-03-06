import { Header } from "./components/Header";
import MainRoutes from './routes'
import { GlobalStyle } from "./styles/global";
import { Buttons } from "./components/Buttons";
import { MemoryRouter as Router } from 'react-router-dom';
import React from "react";

export function App() {
    return (
        <>
            <Router>
                <Header />
                <Buttons/>
                <MainRoutes/>
                <GlobalStyle />
            </Router>
        </>
    );
}
