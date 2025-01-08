import SideBar from "./components/SideBar.tsx";
import Menu from "./components/Menu.tsx";
import {Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <section className="homepage">
            <SideBar/>
            <Menu heading="Dashboard" username="Mahfuzul Nabil" img="/imgs/avatar.jpg" />
            <Outlet/>
        </section>
    );
}