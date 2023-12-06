// import React from 'react';
// import jwt_decode from 'jwt-decode';

// const UserProfile = () => {
//     // Lấy token từ localStorage
//     const userToken = localStorage.getItem('userToken');

//     // Giải mã token để lấy thông tin người dùng
//     // Giả sử token có cấu trúc { "username": "JohnDoe", ... }
//     const decodedToken = decodeToken(userToken);

//     // Hiển thị tên người dùng
//     const userName = decodedToken ? decodedToken.username : 'Guest';

//     return (
//         <div className="user-profile">
//             <p>{userName}</p>
//         </div>
//     );
// };

// // Hàm giải mã token (để thay đổi tùy thuộc vào loại token bạn sử dụng)
// const decodeToken = (token) => {
//     try {
//         // Giả sử sử dụng JSON Web Token
//         const decoded = jwt_decode(token);
//         return decoded;
//     } catch (error) {
//         console.error('Error decoding token:', error);
//         return null;
//     }
// };

// export default UserProfile;
