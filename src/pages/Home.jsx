import {Outlet} from "react-router-dom";
import AppBarComponent from "../components/AppBarComponent.jsx";

const Home = () => {


    return (
        <div>
            <AppBarComponent/>
            <Outlet/>
        </div>
    );
};

export default Home;
