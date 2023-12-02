import style from "./Login.css";

function Login () {
    return (
        <div className="login">
            <div className="login-box">
                <h1>Login</h1>
                <p>Oi Amigo! Enter your detail to get sign in in to your account.</p>
                <input type="email" className="email" placeholder="Email" />
                <input type="password" className="password" placeholder="Password" id="password"/>
                <p>Forgot your password? <span href="#"><strong>Click Here.</strong></span></p>
                <button className="sign-in">Sign In</button>
                <p>Or sigh in with:</p>
                <button><i className="fa-brands fa-google"></i> Google</button> 
                <button><i className="fa-brands fa-facebook"></i> Facebook</button> 
                <p>Don't have a account? <span href="#"><strong>Sign up here.</strong></span></p>
            </div>
        </div>
    )
}

export default Login;