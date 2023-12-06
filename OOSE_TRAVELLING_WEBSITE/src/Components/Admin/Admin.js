import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";
import ManageUser from "./ManageUser";
import CreateNewTour from "./CreateNewTour";

const Admin = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const navigate = useNavigate();

    const handleClick = (button) => {
        setSelectedButton(button);
        navigate(`/admin/manage-${button}`);
    };

    return (
        <>
            <div className="content-container">
                <div className="title-manage">
                    <div>
                        <button
                            className={selectedButton === "user" ? "btn onclicked" : "btn btn-primary"}
                            onClick={() => handleClick("user")}
                        >
                            MANAGE USER
                        </button>
                    </div>

                    <div>
                        <button
                            className={selectedButton === "tour" ? "btn onclicked" : "btn btn-primary"}
                            onClick={() => handleClick("tour")}
                        >
                            MANAGE TOUR
                        </button>
                    </div>

                    <div>
                        <button
                            className={selectedButton === "order" ? "btn onclicked" : "btn btn-primary"}
                            onClick={() => handleClick("order")}
                        >
                            MANAGE ORDER
                        </button>
                    </div>
                </div>


                <div>
                    <Outlet />
                </div>
            </div>
        </>

    );
};

export default Admin;
