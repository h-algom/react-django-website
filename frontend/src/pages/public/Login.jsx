import AuthForm from "../../components/forms/AuthForm";

const Login = () => {
    return <>
    <div className="login-wrapper">
        <div className="login-container flex-row align-center">
            <div className="login-img-wrapper"></div>
            <div className="login-form-wrapper">
                <div className="form-container"><AuthFormForm/></div>
            </div>
        </div>
    </div>
    </>;
};

export default Login;
