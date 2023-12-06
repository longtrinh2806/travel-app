import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createOrder } from "../../../../../Services/apiService";
import { toast } from 'react-toastify';
import './Payment.css';
import {
    IoPricetagsOutline,
} from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import PopularToursImage from '../../../../../Assets/Images/populartours01.jpg'
const Payment = () => {
    const location = useLocation();
    const [title, setTitle] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState()
    const [numberOfRooms, setNumberOfRooms] = useState()
    const [tourId, setTourId] = useState()
    const [travellerDetails, setTravellerDetails] = useState([])
    const [contactDetail, setContactDetail] = useState({})
    const [billingDetail, setBillingDetail] = useState({})
    const [notes, setNotes] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [duration, setDuration] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [totalPrice, setTotalPrice] = useState();
    // const {
    //     state: {
    //         title,
    //         numberOfPeople,
    //         numberOfRooms,
    //         tourId,
    //         travellerDetails,
    //         contactDetail,
    //         billingDetail,
    //         notes

    //     }
    // } = location;

    useEffect(() => {
        if (location.state) {
            setTitle(location.state.title)
            setTourId(location.state.tourId)
            setNumberOfPeople(location.state.numberOfPeople)
            setNumberOfRooms(location.state.numberOfRooms)
            setTravellerDetails(location.state.travellerDetails)
            setContactDetail(location.state.contactDetail)
            setBillingDetail(location.state.billingDetail)
            setNotes(location.state.notes)
            setTourId(location.state.tourId)
            setImageURL(location.state.imageURL)
            setDuration(location.state.duration)
            setDepartureDate(location.state.departureDate)
            setTotalPrice(location.state.totalPrice)
        }
    }, [location.state])
    console.log("check state numberOfPeople", location.state.numberOfPeople)
    console.log("check state numberOfRooms", location.state.numberOfRooms)
    console.log("check state travellerDetails", location.state.travellerDetails)

    const handleSubmit = async () => {
        let data = await createOrder(numberOfPeople, numberOfRooms, travellerDetails, contactDetail, billingDetail, notes, tourId

            // location.state.numberOfPeople,
            // location.state.numberOfRooms,
            // location.state.travellerDetails,
            // location.state.contactDetail,
            // location.state.billingDetail,
            // location.state.notes,
            // location.state.tourId
        );

        if (data && data.message === "Create order successfully") {
            toast.success(data.message);
            // handleSuccess();


        }
        if (data && data.errCode === 0) {
            toast.error(data.errMessage);
        }
    }
    return (
        <>


            <div className="payment-content-up">
                <img
                    src={PopularToursImage}
                    alt="tour01"
                    // src={imageURL}
                    // alt={title}
                    className="payment-content-up-image"
                    style={{
                        width: "100%",
                        height: "340px",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <div className="payment-content-up-title">{title}</div>
            </div>


            <div className="container-payment">
                <div className="payment-content-left">
                    <div className="contact-details-billing-details">
                        <div className="contact-details">
                            <div className="contact-details-title"><FaRegFileLines className="icon-file" />Contact Details</div>
                            <div className="details-infor">
                                <span className="head">First Name :</span>
                                <span className="tail">{contactDetail.firstName}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Last Name :</span>
                                <span className="tail">{contactDetail.lastName}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Email :</span>
                                <span className="tail">{contactDetail.email}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Phone :</span>
                                <span className="tail">{contactDetail.phone}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Country :</span>
                                <span className="tail">{contactDetail.country}</span>
                            </div>
                            <div className="details-address">
                                <span className="head">Address :</span>
                                <span className="tail">{contactDetail.address}</span>
                            </div>
                        </div >
                        <div className="billing-details">
                            <div className="billing-details-title"> <FaRegFileLines className="icon-file" />Billing Details</div>
                            <div className="details-infor">
                                <span className="head">First Name :</span>
                                <span className="tail">{billingDetail.firstName}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Last Name :</span>
                                <span className="tail">{billingDetail.lastName}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Email :</span>
                                <span className="tail">{billingDetail.email}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Phone :</span>
                                <span className="tail">{billingDetail.phone}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Country :</span>
                                <span className="tail">{billingDetail.country}</span>
                            </div>
                            <div className="details-infor">
                                <span className="head">Address :</span>
                                <span className="tail">{billingDetail.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="notes">
                        <div className="notes-title"><FaRegFileLines className="icon-file" />Notes</div>
                        <div className="details-infor">
                            <span className="head">Additional Notes: </span>
                            <span className="tail">{notes}</span>
                        </div>
                    </div>
                    <div className="traveller-details">
                        <div className="traveller-details-title"><FaRegFileLines className="icon-file" />Traveller Details</div>
                        {travellerDetails.map((traveler, index) => (
                            <div className="details-infor" key={index}>
                                <span className="head">{`Traveller ${index + 1} :`}</span>
                                <span className="tail">
                                    {`Mrs ${traveler.firstName} ${traveler.lastName}`}
                                    <br />
                                    {`Passport ID: ${traveler.passportNumber}`}
                                    <br />
                                    {`Age: ${traveler.age}`}
                                    <br />
                                    {`Phone: ${traveler.phone}`}
                                </span>
                            </div>
                        ))}

                    </div>
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >Book</button>
                </div>
                <div className="payment-content-right">
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
}



export default Payment;