import React, { useState, useEffect } from "react";
import { getReviewResponse } from "../../../../../Services/apiService";
const ReviewDisplay = () => {
    const [listReview, setListReview] = useState([
        {
            userFullName: 'thanh',
            rating: 3,
            review: 'dep'
        },
        {
            userFullName: 'tinh',
            rating: 2,
            review: 'dep'
        }
    ])
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
    const tourId = bookingInfo.tourId;

    console.log('tour id:', tourId);
    console.log('bookinginfo:', bookingInfo);

    useEffect(() => {
        fetchReview();
    }, []);

    const fetchReview = async () => {
        let res = await getReviewResponse(tourId);
        // if (res.EC === 0) {
        setListReview(res)
        // }

    }


    return (
        <div className="review-display">
            {listReview && listReview.length > 0 ?
                (listReview.map((item, index) => {
                    console.log('check', item)
                    return (
                        <div key={index}>
                            <h5>{item.userFullName}</h5>
                            <p>

                                {item.rating && item.rating > 0 && (
                                    Array.from({ length: item.rating }).map((_, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '24px',
                                                color: 'gold',
                                                transition: 'color 0.3s, font-size 0.3s',
                                                marginRight: '5px'
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))
                                )}
                            </p>
                            <p>{item.review}</p>
                            <hr></hr>
                        </div>

                    )
                })) : (<p>Not found data</p>)}

        </div>
    );
};

export default ReviewDisplay;
