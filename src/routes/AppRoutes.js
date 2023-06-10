import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Formulario } from "../Formulario";
import { Home } from "../pages/Home";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/cadastrar" element={<Formulario />} exact />
            </Routes>
        </BrowserRouter>
    )
}