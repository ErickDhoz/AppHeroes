import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import DcPage from "../Pages/DcPage";
import Heroe from "../Pages/Heroe";
import MarvelPage from "../Pages/MarvelPage";
import Search from "../Pages/Search";

function HeroesRoutes() {
    return ( 
        <>
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path ="marvel" element={<MarvelPage/>}/>
            <Route path ="dc" element={<DcPage/>}/>
            <Route path ="heroe/:id" element={<Heroe/>}/>
            <Route path ="search" element={<Search/>}/>
            <Route path ="/" element={<Navigate to="/marvel"/>}/>
        </Routes>
        </div>
        
        </>
     );
}

export default HeroesRoutes;