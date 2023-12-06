import React from "react";
import "./AllTours.css";
import Tours from "./Tours/Tours";
import { useState, useEffect } from "react";
import { getAllTours } from '../../Services/apiService';


const AllTours = () => {
  const [listTours, setListTours] = useState([
    {
      tourId: '1',
      rating: 3,
      title: 'ha noi',
      description: 'f',
      imageURL: 'f',
      price: 34345,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '2',
      rating: 3,
      title: 'tam ky',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '3',
      rating: 3,
      title: 'quang nam',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '4',
      rating: 5,
      title: 'da nang',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '5',
      rating: 4,
      title: 'hoi an',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '6',
      rating: 5,
      title: 'vung tau',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '7',
      rating: 3,
      title: 'khanh hoa',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    }
  ])
  useEffect(() => {
    fetchListTours();
  }, []);

  const fetchListTours = async () => {
    let res = await getAllTours();
    // if (res.EC === 0) {
    setListTours(res)
    // }

  }
  return (
    <>
      <div className="container">
        <div className="grid-container">
          {/* <div className="grid-item"> */}
          {listTours && listTours.length > 0 &&
            listTours.map((item, index) => {
              console.log('check', item)
              return (
                <Tours
                  key={item.tourId}
                  title={item.title}
                  price={item.price}
                  imageURL={item.imageURL}
                  tourName={item.title}
                  rating={item.rating}

                />
              )
            })
          }
          {/* </div> */}
        </div>
      </div>



    </>
  );
};

export default AllTours;
