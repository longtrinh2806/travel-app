import React from "react";
import "./Login.css";
import LoginImage from "../../Assets/Images/login.jpg";
import { useState } from "react";
import { toast } from 'react-toastify';
import { postLogin } from '../../Services/apiService';
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitLogin = async () => {
        //validate
        const isvalidateEmail = validateEmail(email);

        if (!isvalidateEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }



        //call apis
        // let data = {
        //     username: username,
        //     password: password,
        //     confirmPassword: confirmPassword,
        //     firstName: firstName,
        //     lastName: lastName,
        //     birthDate: birthDate,
        //     email: email,
        //     phone: phone,
        //     country: country,
        // }
        // console.log("check data", data)

        let data = await postLogin(email, password);
        console.log("check res", data)
        if (data && data.message === "Sign In Successfully") {

            toast.success(data.errMessage);
            localStorage.setItem("token", data.token);
            navigate('/')
        }
        if (data && data.errCode !== 0) {
            toast.error(data.errMessage);
        }
    }

    // localStorage.setItem('userToken', data.token);
    return (
        <>
            <div className="login-introduce">
                <img src={LoginImage} />
                <div className="title">LOGIN</div>
            </div>
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary"
                            onClick={() => { handleSubmitLogin() }}
                        >Login</button>
                    </div>
                    <div onClick={() => { navigate('/forgot-password') }}>Quên mật khẩu</div>
                </form>
            </div>
        </>
    )
}
export default Login;