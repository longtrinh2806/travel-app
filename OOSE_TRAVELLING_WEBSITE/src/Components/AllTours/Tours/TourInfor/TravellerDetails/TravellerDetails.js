import React, { useState } from "react";

const TravellerDetails = ({ numberOfPeople, handleListTravellerDetailsfromChild }) => {
    const [listTravellerDetailsFromChild, setListTravellerDetailsFromChild] = useState([
        { danhXung: "Mr" },
    ]);

    const handleInputChange = (index, fieldName, value) => {
        console.log("Selected danhXung:", value);
        const updatedList = [...listTravellerDetailsFromChild];
        updatedList[index] = {
            ...updatedList[index],
            [fieldName]: value,
        };

        if (fieldName === "age") {
            updatedList[index][fieldName] = processAgeInput(value);
        }

        setListTravellerDetailsFromChild(updatedList);
        handleListTravellerDetailsfromChild(updatedList)
    };
    const processAgeInput = (input) => {
        const numericValue = input.replace(/[^\d]/g, ''); // Chỉ giữ lại các chữ số
        return numericValue === '' ? '' : parseInt(numericValue, 10);
    };
    return (
        <>
            {Array.from({ length: numberOfPeople }, (_, index) => (
                <div key={index}>
                    <h4>Traveller {index + 1}</h4>
                    <div className="col-md-6">
                        <label className="form-label">Title *</label>
                        <select
                            value={listTravellerDetailsFromChild[index]?.danhXung || "Mr"}
                            onChange={(event) => handleInputChange(index, "danhXung", event.target.value)}
                            className="form-select"
                        >
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Miss</option>
                            <option>Master</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <input
                            type="text"
                            className="form-control"
                            value={listTravellerDetailsFromChild[index]?.firstName || ""}
                            onChange={(event) => handleInputChange(index, "firstName", event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <input
                            type="text"
                            className="form-control"
                            value={listTravellerDetailsFromChild[index]?.lastName || ""}
                            onChange={(event) => handleInputChange(index, "lastName", event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Passport Number *</label>
                        <input
                            type="text"
                            className="form-control"
                            value={listTravellerDetailsFromChild[index]?.passportNumber || ""}
                            onChange={(event) => handleInputChange(index, "passportNumber", event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Age *</label>
                        <input
                            type="text"
                            className="form-control"
                            value={listTravellerDetailsFromChild[index]?.age || ""}
                            onChange={(event) => handleInputChange(index, "age", event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone *</label>
                        <input
                            type="text"
                            className="form-control"
                            value={listTravellerDetailsFromChild[index]?.phone || ""}
                            onChange={(event) => handleInputChange(index, "phone", event.target.value)}
                        />
                    </div>
                </div>
            ))}
            {/* Add a button to submit the form and pass listTravellerDetailsFromChild to the parent component */}
        </>
    );
};

export default TravellerDetails;
