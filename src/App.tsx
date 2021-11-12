import { Header } from "./components/Header";
import MainRoutes from './routes'
import { GlobalStyle } from "./styles/global";
import { Button } from "./components/Buttons";
import { MemoryRouter as Router } from 'react-router-dom';

export function App() {
    return (
        <>
            <Router>
                <Header />
                <Button/>
                <MainRoutes/>
                <GlobalStyle />
            </Router>
        </>
    );
}
