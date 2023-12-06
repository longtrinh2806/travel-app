import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import ContactDetails from "./ContactDetails/ContactDetails";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import {
  IoPricetagsOutline,
} from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import PopularToursImage from '../../../../Assets/Images/populartours01.jpg'
import { useState, useEffect } from "react";
import TravellerDetails from "./TravellerDetails/TravellerDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import { useNavigate } from "react-router-dom";
import "./ProcessBooking.css";
const ProcessBooking = (props) => {
  // const [numberOfPeople, setNumberOfPeople] = useState(0);
  // const [numberOfRooms, setNumberOfRooms] = useState(0);
  // const [tourId, setTourId] = useState(0);
  // const [title, setTitle] = useState('');

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [travellerDetails, setTravellerDetails] = useState([])
  const [contactDetail, setContactDetail] = useState({})
  const [billingDetail, setBillingDetail] = useState({})
  const [sameAsContactDetails, setSameAsContactDetails] = useState(false);
  const [notes, setNotes] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    // Lấy giá trị từ localStorage khi component được render
    const storedNumberOfPeople = localStorage.getItem('numberOfPeople');
    const storedNumberOfRooms = localStorage.getItem('numberOfRooms');
    const storedTotalPrice = localStorage.getItem('totalPrice');
    // Kiểm tra xem giá trị có tồn tại không và cập nhật state
    if (storedNumberOfPeople) {
      setNumberOfPeople(parseInt(storedNumberOfPeople, 10));
    }

    if (storedNumberOfRooms) {
      setNumberOfRooms(parseInt(storedNumberOfRooms, 10));
    }

    if (storedTotalPrice) {
      setTotalPrice(parseInt(storedTotalPrice, 10));
    }


  }, []);

  // useEffect(() => {
  //   // Lấy thông tin từ localStorage
  //   const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
  //   const numberOfPeopleFromLocalStorage = parseInt(bookingInfo.numberOfPeople, 10) || 0;
  //   const numberOfRoomsFromLocalStorage = parseInt(bookingInfo.numberOfRooms, 10) || 0;
  //   const tourIdFromLocalStorage = parseInt(bookingInfo.tourId, 10) || 0;
  //   const titleFromLocalStorage = bookingInfo.title;
  //   // Cập nhật state
  //   setNumberOfPeople(numberOfPeopleFromLocalStorage);
  //   setNumberOfRooms(numberOfRoomsFromLocalStorage);
  //   setTourId(tourIdFromLocalStorage);
  //   setTitle(titleFromLocalStorage);


  //   // In ra console để kiểm tra
  //   console.log('Booking Info:', numberOfPeopleFromLocalStorage, numberOfRoomsFromLocalStorage, tourIdFromLocalStorage, titleFromLocalStorage);
  // }, []);

  const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
  const tourId = bookingInfo.tourId;
  // const numberOfPeople = bookingInfo.numberOfPeople;
  // const numberOfRooms = bookingInfo.numberOfRooms;
  const title = bookingInfo.title;
  const imageURL = bookingInfo.imageURL
  const departureDate = bookingInfo.departureDate
  const duration = bookingInfo.duration

  console.log('check infor save localstorage', bookingInfo)
  console.log('check numberOfPeople save localstorage', numberOfPeople)
  console.log('check numberOfRooms save localstorage', numberOfRooms)


  const handleListTravellerDetailsfromChild = (dataFromChild) => {
    setTravellerDetails(dataFromChild)
  }
  const handleContactDetailfromChild = (dataFromChild) => {
    setContactDetail(dataFromChild)
  }

  const handleBillingDetailfromChild = (dataFromChild) => {
    setBillingDetail(dataFromChild)
  }

  const handleSameAsContactDetailsChange = () => {
    setSameAsContactDetails(!sameAsContactDetails);
  };


  const handleSubmit = () => {

  }
  console.log("numberOfRooms", numberOfRooms)
  console.log("numberOfPeople", numberOfPeople)
  console.log("checklisttravel", travellerDetails)
  console.log("checkcontact", contactDetail)
  console.log("checkbill", billingDetail)
  console.log("note", notes)
  console.log("tourId", tourId)
  console.log("title", title)


  return (
    <>
      <div className="process-content-up">
        <img
          src={PopularToursImage}
          alt="tour01"
          // src={imageURL}
          // alt={title}
          className="process-content-up-image"
          style={{
            width: "100%",
            height: "340px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="process-content-up-title">{title}</div>
      </div>
      <div className="container-content-up">
        <div className="form-infor">
          <div className="title"><FaRegFileLines className="file-icon" />Traveller Details</div>
          <TravellerDetails
            numberOfPeople={numberOfPeople}
            handleListTravellerDetailsfromChild={handleListTravellerDetailsfromChild}
          />
          <div className="title"><FaRegFileLines className="file-icon" />Contact Details</div>
          <ContactDetails
            handleContactDetailfromChild={handleContactDetailfromChild}
          />
          <div className="title"><FaRegFileLines className="file-icon" />Billing Details</div>
          <checkbox className="checkbox-billing-details">
            <input
              type="checkbox"
              id="sameAsContactDetails"
              name="sameAsContactDetails"
              checked={sameAsContactDetails}
              onChange={handleSameAsContactDetailsChange}

            />
            <label htmlFor="sameAsContactDetails" >
              The Same as Contact Details
            </label>
          </checkbox>

          <BillingDetails
            handleBillingDetailfromChild={handleBillingDetailfromChild}
            contactDetail={contactDetail}
            sameAsContactDetails={sameAsContactDetails}
          />
          <div className="title"><FaRegFileLines className="file-icon" />Notes</div>
          <div className="col-md-6">
            <label className="form-label">Additional Notes</label>
            <textarea className="form-control" value={notes} onChange={(event) => setNotes(event.target.value)} />
          </div>
          <button type="button"
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
              // Navigate to the payment page with state
              navigate("/payment", {

                state: {
                  title,
                  numberOfPeople,
                  numberOfRooms,
                  tourId,
                  travellerDetails,
                  contactDetail,
                  billingDetail,
                  notes,
                  imageURL,
                  duration,
                  departureDate,
                  totalPrice

                }
              });
            }}
          >Next Step</button>
        </div>



        <div className="process-component-right">
          <div className="title-tour"><AiTwotoneThunderbolt className="thunder-icon" />{title}</div>
          <div className="departureDate"><span>Departure Date: </span>{departureDate}</div>
          <div className="duration"><span>Duration: </span>Duration: {duration}</div>
          <div className="numberOfPeople"><span>People: </span>{numberOfPeople}</div>
          <div className="numberOfRooms"><span>Rooms: </span>{numberOfRooms}</div>
          <hr></hr>
          <div className="totalPrice">
            <span className="title-totalPrice">
              <IoPricetagsOutline className="icon-price" />
              Total Price:
            </span>
            <span className="number-title-totalPrice"> ${totalPrice}</span>
          </div>

        </div>
      </div>

    </>
  );
};

export default ProcessBooking;