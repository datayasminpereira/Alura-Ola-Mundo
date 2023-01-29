import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Rodape from "components/Rodape";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";


export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Menu/>

        <Routes>

            <Route path="/" element={<PaginaPadrao/>}>
                <Route index element={<Inicio/>}/>
                <Route path="sobremim" element={<SobreMim/>}/>
            </Route>

            <Route path="posts/:id/*" element={<Post/>}/>

            <Route path="*" element={<NaoEncontrada/>}/>

        </Routes>

        <Rodape/>
        
    </BrowserRouter>
  )
}

