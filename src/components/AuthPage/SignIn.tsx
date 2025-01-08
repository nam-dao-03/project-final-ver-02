import GroupInput from "./GroupInput.tsx";
import React, {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import Brand from "../Brand.tsx";

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>): void {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(isRemember);
    }

    return <div className="auth__sign-in-form">
        <Brand className="margin-bottom-129" />

        <h1 className="auth__heading margin-top-129 margin-bottom-8">Welcome back </h1>
        <p className="auth__subheading margin-bottom-25">Welcome back! Please enter your details</p>

        <form className="auth__form">
            <GroupInput label="email" name="Email" type="email" className="auth__form-group" placeholder="Email" value={email} handleInput={(e):void=>setEmail(e.target.value)} />
            <GroupInput label="password" name="Password" type="password" className="auth__form-group margin-bottom-20" placeholder="Password" value={password} handleInput={(e):void=>setPassword(e.target.value)} />

            <div className="auth__form-remember margin-bottom-25">
                <input type="checkbox" id="remember" name="remember" checked={isRemember} onChange={(e:ChangeEvent<HTMLInputElement>)=>setIsRemember(e.target.checked)} />
                <label htmlFor="remember" className="auth__form-remember-checkbox"></label>
                <label htmlFor="remember">Remember for 30 Days</label>
                <a href="" className="auth__form-remember-forgot-password">Forgot password</a>
            </div>
            <button type="submit" className="btn btn-submit margin-bottom-25" onClick={handleSubmit}>Sign in</button>
            <p className="auth__form-sign-up">Don't have an account? <Link to="/auth/signup"><span className="form__decoration-sign-up"></span> Sign up for free</Link></p>
        </form>
    </div>
}