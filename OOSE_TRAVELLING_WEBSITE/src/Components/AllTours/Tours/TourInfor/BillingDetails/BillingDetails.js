import React, { useState } from "react";
import popularTourImage from "../../../../../Assets/Images/populartours01.jpg";
import { useEffect } from "react";
const BillingDetails = ({ handleBillingDetailfromChild, contactDetail, sameAsContactDetails }) => {
    const [billingDetailfromChild, setBillingDetailfromChild] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        address: ''
    })



    const handleInputChange = (event, fieldName) => {
        setBillingDetailfromChild({
            ...billingDetailfromChild,
            [fieldName]: event.target.value,
        });

    };
    handleBillingDetailfromChild(billingDetailfromChild)
    useEffect(() => {
        // Kiểm tra nếu ô checkbox được chọn, cập nhật Billing Details từ Contact Details
        if (sameAsContactDetails) {
            setBillingDetailfromChild(contactDetail);
            handleBillingDetailfromChild(contactDetail);
        }
    }, [sameAsContactDetails, contactDetail]);


    return (
        <>
            <div className="col-md-6">
                <label className="form-label">First Name *</label>
                <input
                    type="text"
                    className="form-control"
                    value={billingDetailfromChild.firstName}

                    onChange={(event) => handleInputChange(event, 'firstName')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Last Name *</label>
                <input
                    type="text"
                    className="form-control"
                    value={billingDetailfromChild.lastName}
                    onChange={(event) => handleInputChange(event, 'lastName')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Email *</label>
                <input
                    type="email"
                    className="form-control"
                    value={billingDetailfromChild.email}
                    onChange={(event) => handleInputChange(event, 'email')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Phone *</label>
                <input
                    type="text"
                    className="form-control"
                    value={billingDetailfromChild.phone}
                    onChange={(event) => handleInputChange(event, 'phone')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Country *</label>
                <input
                    type="text"
                    className="form-control"
                    value={billingDetailfromChild.country}
                    onChange={(event) => handleInputChange(event, 'country')}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Address </label>
                <input
                    type="text"
                    className="form-control"
                    value={billingDetailfromChild.address}
                    onChange={(event) => handleInputChange(event, 'address')}
                />
            </div>


        </>
    );
};

export default BillingDetails;