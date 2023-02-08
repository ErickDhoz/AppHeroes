import { Route, Routes } from "react-router-dom";
import LoginPage from "../Auth/Pages/LoginPage";
import HeroesRoutes from "../Heroes/routers/HeroesRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRoute() {
    return (  
        <>
        
        <Routes>            
            {/*<Route path ="login" element={<LoginPage/>}/> */}

            <Route path ="login" element={
                <PublicRoute>
                    <LoginPage/>
                </PublicRoute>
            }/>
            
            <Route path ="/*" element={
                <PrivateRoute>
                    <HeroesRoutes/>
                </PrivateRoute>
            }/>
            
                      
        </Routes>
        </>
    );
}

export default AppRoute;