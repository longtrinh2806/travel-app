import React, { useState, useEffect } from "react";
import { getAllTours } from '../../Services/apiService';
import { NavLink } from "react-router-dom";
import "./Destination.css";

const Destination = () => {
  const [listTours, setListTours] = useState([]);

  useEffect(() => {
    fetchListTours();
  }, []);

  const fetchListTours = async () => {
    let res = await getAllTours();
    // if (res.EC === 0) {
    setListTours(res);
    // }
  }

  // Lấy danh sách địa điểm duy nhất
  const uniqueLocations = [...new Set(listTours.map(item => item.location))];

  return (
    <>
      <div className="container">
        <div className="grid-container">
          {uniqueLocations.map((location, index) => {
            const filteredTours = listTours.filter(item => item.location === location);
            const totalTours = filteredTours.length;

            // Giả sử URL hình ảnh của chuyến đi đầu tiên được sử dụng cho việc hiển thị
            const imageURL = totalTours > 0 ? filteredTours[0].imageURL : '';

            return (
              <div key={index} className="destination-content">
                <div className="destination-component">
                  <img src={imageURL} alt={`Điểm đến ${index}`} />
                  <div className="quantity-tours">{totalTours} tours</div>
                  <div className="overlay-tour">
                    <div className="destination-text">
                      <h2>{location}</h2>
                      <h2>
                        <NavLink to={`/all-tours/${location}`} className="view-all">
                          Xem Tất cả Chuyến đi
                        </NavLink>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destination;