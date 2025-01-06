import Auth from "./pages/Auth.tsx";
import {Route, Routes, Navigate} from "react-router-dom";
import SignIn from "./components/SignIn.tsx";
import SignUp from "./components/SignUp.tsx";
export default function App() {
    return (
            <Routes>
                <Route path="/auth" element={<Auth/>} >
                    <Route index element={<Navigate to="signin"/>} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path='signup' element={<SignUp />} />
                </Route>
            </Routes>
    )
}