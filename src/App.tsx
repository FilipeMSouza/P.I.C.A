import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
    return (
        <>
            <Router>
                <Header />
                <GlobalStyle />
            </Router>
        </>
    );
}
