import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../Services/apiService';
import { Navigate, useNavigate } from "react-router-dom";


const CreateNewUser = (onClose, onSuccess) => {

    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");


    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitAddUser = async () => {
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


        if (password !== confirmPassword) {
            toast.error('Password and confirm password do not match');
            return;
        }

        if (!password) {
            toast.error('Invalid password')
            return;
        }



        let data = await postCreateNewUser(email, password, firstName, lastName, birthDate, phone, country);
        console.log("check res", data)
        if (data && data.message === "Sign Up Successfully") {
            toast.success(data.message);
            // handleSuccess();
        }
        if (data && data.errCode === 0) {
            toast.error(data.errMessage);
        }


    }


    return (

        <>

            <div className="container">
                <form className="row g-3">
                    {/* <div className="row g-3"></div> */}
                    <div className="col-md-6">
                        <label className="form-label">Email*</label>
                        <input type="text" className="form-control" value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password*</label>
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
                    <div className="col-md-6">
                        <label className="form-label">First Name*</label>
                        <input type="text" className="form-control" value={firstName}
                            onChange={(event) => {
                                setFirstName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name*</label>
                        <input type="text" className="form-control" value={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Birth Date*</label>
                        <input type="date" className="form-control" value={birthDate}
                            onChange={(event) => {
                                setBirthDate(event.target.value)
                            }}
                        />
                    </div>
                    {/* <div className="col-md-6">
                        <label className="form-label">Email*</label>
                        <input type="text" className="form-control" value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </div> */}
                    <div className="col-md-6">
                        <label className="form-label">Phone*</label>
                        <input type="text" className="form-control" value={phone}
                            onChange={(event) => {
                                setPhone(event.target.value)
                            }} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Country*</label>
                        <input type="text" className="form-control" value={country}
                            onChange={(event) => {
                                setCountry(event.target.value)
                            }}
                        />
                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary"
                            onClick={() => { handleSubmitAddUser(); }}
                        >Add</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default CreateNewUser;