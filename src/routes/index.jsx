import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Characters from "../pages/Characters.jsx";
import Movies from "../pages/Movies.jsx";
import Potions from "../pages/Potions.jsx";
import RequireAuth from "../components/RequireAuth.jsx";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/home'} element={<Home/>}>
                <Route path={"characters"} element={<RequireAuth><Characters/></RequireAuth>}/>
                <Route path={"movies"} element={<RequireAuth><Movies/></RequireAuth>}/>
                <Route path={"potions"} element={<RequireAuth><Potions/></RequireAuth>}/>
            </Route>
            <Route path={'/*'} element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;