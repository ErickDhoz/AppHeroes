import { Route, Routes } from "react-router-dom";
import LoginPage from "../Auth/Pages/LoginPage";
import HeroesRoutes from "../Heroes/routers/HeroesRoutes";

function AppRoute() {
    return (  
        <>
        
        <Routes>            
            <Route path ="login" element={<LoginPage/>}/> 
            <Route path ="/*" element={<HeroesRoutes/>}/>           
        </Routes>
        </>
    );
}

export default AppRoute;