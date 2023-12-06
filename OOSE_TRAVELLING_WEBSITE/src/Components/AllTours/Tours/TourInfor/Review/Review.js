import React, { useState } from 'react';
import StarRating from './StarRating';
import { toast } from 'react-toastify';
import { createReview } from '../../../../../Services/apiService';
import "./Review.css";

const Review = () => {
    const [formData, setFormData] = useState({
        rating: 0,
        review: '',
    });

    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
    const tourId = bookingInfo.tourId;
    console.log('check tourid', tourId)
    const handleRatingChange = (newRating) => {
        setFormData((prevData) => ({
            ...prevData,
            rating: newRating,
        }));
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gửi formData.rating lên backend hoặc thực hiện các xử lý khác
        console.log('Rating:', formData.rating);
        console.log('Review:', formData.review);

        let data = await createReview(tourId, formData.rating, formData.review);

        if (data && data.message === "Created Successfully") {
            toast.success(data.message);
            // handleSuccess();
            // Đặt lại trạng thái form sau khi đã gửi đi
            setFormData({
                rating: 0,
                review: '',
            });

        }
        if (data && data.errCode === 0) {
            toast.error(data.errMessage);
        }



        // setFormData({
        //     rating: 0,
        //     review: '',
        // });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Add Rating</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Rating points:</label>
                    <StarRating rating={formData.rating} onRatingChange={handleRatingChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Comment:</label>
                    <textarea
                        className="form-control"
                        name="review"
                        value={formData.review}
                        onChange={handleReviewChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

            <div className='review-title'>Review</div>

        </div>
    );
};

export default Review;
