import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTours from "./Components/AllTours/AllTours";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Components/Admin/Admin";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ManageUser from "./Components/Admin/ManageUser";
import ManageTour from "./Components/Admin/ManageTour";
import TourInfor from "./Components/AllTours/Tours/TourInfor/TourInfor";
import ProcessBooking from "./Components/AllTours/Tours/TourInfor/ProcessBooking";
import Tours from "./Components/AllTours/Tours/Tours";
import Payment from "./Components/AllTours/Tours/TourInfor/Payment/Payment";
import ManageOrder from "./Components/Admin/ManageOrder";
import ViewAllTour from "./Components/Destination/Asian/ViewAllTour";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        {/* <React.StrictMode> */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="all-tours" element={<AllTours />} />
          <Route path="blog" element={<Blog />} />
          <Route path="destination" element={<Destination />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="admin" element={<Admin />} >
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="manage-tour" element={<ManageTour />} />
            <Route path="manage-order" element={<ManageOrder />} />
          </Route>
          <Route path="process-booking" element={<ProcessBooking />} />
          <Route path="payment" element={<Payment />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="all-tours/:location" element={<ViewAllTour />} />
        </Route>
        <Route path="tour/:tourName" element={<TourInfor />} />
        {/* <Route path="/tour01" element={<Tour01 />}></Route> */}

        {/* </React.StrictMode> */}
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>

  </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
