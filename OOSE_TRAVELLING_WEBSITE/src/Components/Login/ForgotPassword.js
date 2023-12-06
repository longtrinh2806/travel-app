import React from "react";
import "./Login.css";

import { useState } from "react";
import { toast } from 'react-toastify';
import { postUpdatePassword } from '../../Services/apiService';
import { Navigate, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleResetPassword = async () => {

        const isvalidateEmail = validateEmail(email);

        if (!isvalidateEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }


        if (password !== confirmPassword) {
            toast.error('Password and confirm password do not match');
            return;
        }

        let data = await postUpdatePassword(email, phone, password);
        console.log("check res", data)
        if (data && data.message === "Change Password Successfully!") {
            toast.success(data.message);
            navigate('/login')
        }
        if (data && data.message === "Your search did not return any results. Please try again with other information.") {
            toast.error(data.message);
            // nothing just test
        }

    };

    return (
        <>
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
                        <label className="form-label">Phone*</label>
                        <input type="text" className="form-control" value={phone}
                            onChange={(event) => {
                                setPhone(event.target.value)
                            }} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Confirm Password*</label>
                        <input type="password" className="form-control" value={confirmPassword}
                            onChange={(event) => {
                                setConfirmPassword(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary"
                            onClick={() => { handleResetPassword() }}
                        >Reset</button>
                    </div>

                </form>
            </div>

        </>
    );
};


export default ForgotPassword;