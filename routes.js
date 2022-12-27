import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Movie';
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";


import Erro from "./pages/Error";

function RoutesApp() {
    return (
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/Movie/:id" element={ <Movie/> } />
                <Route path="/Favoritos" element={ <Favoritos/> } />

                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;