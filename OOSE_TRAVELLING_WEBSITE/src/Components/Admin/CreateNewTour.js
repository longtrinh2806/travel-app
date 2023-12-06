import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { postCreateNewTour } from '../../Services/apiService';
import { Navigate, useNavigate } from "react-router-dom";

const CreateNewTour = ({ fetchListTours }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [price, setPrice] = useState();
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [quantity, setQuantity] = useState();
    const [departureDate, setDepartureDate] = useState('');



    const handleSubmit = async (event) => {
        // event.preventDefault();
        // // Gửi dữ liệu đến backend hoặc thực hiện các tác vụ khác tại đây
        // const tourData = {
        //     title,
        //     description,
        //     imageURL,
        //     price,
        //     location,
        //     duration,
        //     quantity,
        //     departureDate,
        // };
        // console.log('Submitted data:', tourData);

        let data = await postCreateNewTour(title,
            description,
            imageURL,
            price,
            location,
            duration,
            quantity,
            departureDate);
        console.log("check res", data)
        if (data && data.message === "Add New Tour Successfully!") {
            toast.success(data.message);
            await fetchListTours()
        }
        if (data && data.errCode === 0) {
            toast.error(data.errMessage);
        }
    };

    return (
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL:</label>
                    <input type="text" className="form-control" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(event) => {
                            const value = event.target.value.replace(/[^\d]/g, ''); // Lọc chỉ giữ lại các chữ số
                            setPrice(value === '' ? 0 : parseInt(value, 10));
                        }}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">Location:</label>
                    <input type="text" className="form-control" value={location} onChange={(event) => setLocation(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Duration:</label>
                    <input type="text" className="form-control" value={duration} onChange={(event) => setDuration(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={quantity}
                        onChange={(event) => {
                            const value = event.target.value.replace(/[^\d]/g, ''); // Lọc chỉ giữ lại các chữ số
                            setQuantity(value === '' ? 0 : parseInt(value, 10));
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Departure Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={departureDate}
                        onChange={(event) => setDepartureDate(event.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={() => { handleSubmit(); console.log('checkdata',) }}
                >Add</button>
            </form>
        </div>
    );
};

export default CreateNewTour;
