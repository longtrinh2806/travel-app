import axios from "../utils/axiosCustomize";


const postSignUp = (email, password, firstName, lastName, birthDate, phone, country) => {
    //submit data
    return axios.post('auth/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        phone: phone,
        country: country
    });
}

const postCreateNewUser = (email, password, firstName, lastName, birthDate, phone, country) => {
    //submit data
    return axios.post('auth/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        phone: phone,
        country: country
    });
}

const postLogin = (email, password) => {
    //submit data
    return axios.post('auth/signin', {
        email: email,
        password: password,
    });
}

const getAllUsers = () => {
    // Định nghĩa header với token
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    // Gửi yêu cầu GET với Axios và headers
    return axios.get('api/admin/user', { headers: headers })
}

const postUpdatePassword = (email, phone, password) => {
    return axios.put('forgotpasswd/verify', {
        email: email,
        phone: phone,
        newPassword: password
    }
    )
}

const postCreateNewTour = (title,
    description,
    imageURL,
    price,
    location,
    duration,
    quantity,
    departureDate) => {

    // Định nghĩa header với token
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    //submit data
    return axios.post('/api/admin/tour/create', {
        title: title,
        description: description,
        imageURL: imageURL,
        price: price,
        location: location,
        duration: duration,
        quantity: quantity,
        departureDate: departureDate
    }, { headers: headers });
}

const getAllTours = () => {
    // Định nghĩa header với token
    // const token = localStorage.getItem("token");
    // const headers = {
    //     'Authorization': `Bearer ${token}`
    // };

    // Gửi yêu cầu GET với Axios và headers
    return axios.get('/api/tour')
}

// const deleteUser = (userId) => {
//     return axios.delete(`/api/admin/tour/update/${userId}`)
// }

const deleteTour = (tourId) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    return axios.delete(`api/admin/tour/delete/${tourId}`, {
        headers: headers,
        data: { tourId: tourId }
    });
};

const putUpdateTour = (tourId, title, description, imageURL, price, location, duration, quantity, departureDate) => {
    //submit data
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return axios.put(`/api/admin/tour/update/${tourId}`, {
        tourId: tourId,
        title: title,
        description: description,
        imageURL: imageURL,
        price: price,
        location: location,
        duration: duration,
        quantity: quantity,
        departureDate: departureDate
    }, { headers: headers });
}

const getTourInfoByName = (tourName) => {
    return axios.get(`/api/tour/${tourName}`, { tourName: tourName });
}

const createOrder = (
    numberOfPeople,
    numberOfRooms,
    travellerDetails,
    contactDetail,
    billingDetail,
    notes,
    tourId) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    return axios.post('api/order', {
        numberOfPeople: numberOfPeople,
        numberOfRooms: numberOfRooms,
        travellerDetails: travellerDetails,
        contactDetail: contactDetail,
        billingDetail: billingDetail,
        notes: notes,
        tourId: tourId
    }, {
        headers: headers
    });
}

const createReview = (tourId, rating, review) => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    return axios.post('api/review', {
        tourId: tourId,
        rating: rating,
        review: review
    }, { headers: headers });
};

const getReviewResponse = (tourId) => {
    return axios.get(`api/review/tour/${tourId}`);
}

const getAllOrders = () => {
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    // Gửi yêu cầu GET với Axios và headers
    return axios.get('api/admin/order', { headers: headers })
}

const confirmOrder = (orderId) => {
    //submit data
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return axios.put(`/api/admin/order/confirm/${orderId}`, { orderId: orderId }, { headers: headers });
}

const cancelOrder = (orderId) => {
    //submit data
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return axios.put(`/api/admin/order/cancel/${orderId}`, { orderId: orderId }, { headers: headers });
}

const getTourByLocation = (location) => {
    return axios.get(`/api/tour/location/${location}`, { location: location });
}

export {
    postSignUp, postLogin, getAllUsers, postCreateNewUser, postUpdatePassword,
    postCreateNewTour, getAllTours, deleteTour, putUpdateTour,
    getTourInfoByName, createOrder, createReview, getReviewResponse, getAllOrders, confirmOrder,
    cancelOrder, getTourByLocation
}