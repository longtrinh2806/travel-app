import React, { useState } from "react";
import "./ContactDetails.css";
import popularTourImage from "../../../../../Assets/Images/populartours01.jpg";

const ContactDetails = ({ handleContactDetailfromChild }) => {
    const [contactDetailfromChild, setContactDetailfromChild] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        address: ''
    })

    const handleInputChange = (event, fieldName) => {
        setContactDetailfromChild({
            ...contactDetailfromChild,
            [fieldName]: event.target.value,
        });

    };
    handleContactDetailfromChild(contactDetailfromChild)

    console.log('chcec', contactDetailfromChild.firstName)
    return (
        <>
            <div className="col-md-6">
                <label className="form-label">First Name *</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactDetailfromChild.firstName}

                    onChange={(event) => handleInputChange(event, 'firstName')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Last Name *</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactDetailfromChild.lastName}
                    onChange={(event) => handleInputChange(event, 'lastName')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Email *</label>
                <input
                    type="email"
                    className="form-control"
                    value={contactDetailfromChild.email}
                    onChange={(event) => handleInputChange(event, 'email')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Phone *</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactDetailfromChild.phone}
                    onChange={(event) => handleInputChange(event, 'phone')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Country *</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactDetailfromChild.country}
                    onChange={(event) => handleInputChange(event, 'country')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Address </label>
                <input
                    type="text"
                    className="form-control"
                    value={contactDetailfromChild.address}
                    onChange={(event) => handleInputChange(event, 'address')}
                />
            </div>



        </>
    );
};

export default ContactDetails;