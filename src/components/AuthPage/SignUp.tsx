import GroupInput from "./GroupInput.tsx";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Brand from "../Brand.tsx";

export default function SignUp () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>):void {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
    }

    return <div className="auth__sign-in-form">
        <Brand className="margin-bottom-60" />

        <h1 className="auth__heading margin-bottom-8">Create new account</h1>
        <p className="auth__subheading margin-bottom-25">Welcome back! Please enter your details</p>

        <form className="auth__form">
            <GroupInput label="full-name" name="Full Name" type="text" className="auth__form-group" placeholder="Full Name" value={name} handleInput={(e):void=>setName(e.target.value)} />
            <GroupInput label="email" name="Email" type="email" className="auth__form-group" placeholder="Email" value={email} handleInput={(e)=>setEmail(e.target.value)} />
            <GroupInput label="password" name="Password" type="password" className="auth__form-group" placeholder="Password" value={password} handleInput={(e)=>setPassword(e.target.value)} />
            <GroupInput label="confirm-password" name="Confirm Password" type="password" className="auth__form-group margin-bottom-20" placeholder="Confirm password" value={confirmPassword} handleInput={(e)=>setConfirmPassword(e.target.value)} />
            <button type="submit" className="btn btn-submit margin-bottom-25" onClick={handleSubmit}>Create Account</button>
            <p className="auth__form-sign-up">Already have an account? <Link to="/auth/signin" className="sign-in"> <span className="form__decoration-sign-in"></span>Sign in</Link></p>
        </form>
    </div>
}