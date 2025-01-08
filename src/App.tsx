import Auth from "./pages/Auth.tsx";
import {Route, Routes, Navigate} from "react-router-dom";
import SignIn from "./components/AuthPage/SignIn.tsx";
import SignUp from "./components/AuthPage/SignUp.tsx";
import Dashboard from "./pages/DashBoard.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import HomePage from "./HomePage.tsx";
import Transactions from "./pages/Transactions.tsx";
export default function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
            <Routes>
                <Route path="/landingpage" element={<LandingPage/>}/>
                <Route path="/auth" element={<Auth/>} >
                    <Route index element={<Navigate to="signin"/>} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path='signup' element={<SignUp />} />
                </Route>
                <Route path="/" element={<HomePage/>} >
                    <Route index element={<Navigate to="dashboard"/>}/>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                </Route>
            </Routes>
    )
}