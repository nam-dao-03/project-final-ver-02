import {Outlet} from "react-router-dom";

export default function Auth() {
    return(
        <section className="auth">
            <Outlet />
            <img src='/src/assets/imgs/auth_img.png' alt='' className='auth__img' />
        </section>
    )
}