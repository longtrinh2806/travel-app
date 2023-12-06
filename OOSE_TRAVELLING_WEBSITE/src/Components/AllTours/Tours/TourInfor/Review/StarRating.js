import React from 'react';

const StarRating = ({ rating, onRatingChange }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="mb-3">
            {stars.map((star) => (
                <span
                    key={star}
                    onClick={() => onRatingChange(star)}
                    style={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: rating >= star ? 'gold' : '#ccc',
                        // transition: 'color 0.3s, font-size 0.3s',
                        marginRight: '5px'
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
