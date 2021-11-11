import { Header } from "./components/Header";
import MainRoutes from './routes'
import { GlobalStyle } from "./styles/global";
import { MemoryRouter as Router } from 'react-router-dom';

export function App() {
    return (
        <>
            <Router>
                <Header />
                <MainRoutes/>
                <GlobalStyle />
            </Router>
        </>
    );
}
