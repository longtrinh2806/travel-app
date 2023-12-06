import { useEffect, useState } from "react";
import { getAllTours } from '../../Services/apiService';
import CreateNewTour from "./CreateNewTour";
import ModalUpdateTour from "./ModalUpdateTour";
import ModalDeleteTour from "./ModalDeleteTour";


const ManageTour = (props) => {
    const [listTours, setListTours] = useState([

        {
            tourId: '1',
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


    //CONPONENT DID MOUNT
    useEffect(() => {
        fetchListTours();
    }, []);

    const fetchListTours = async () => {
        let res = await getAllTours();
        // if (res.EC === 0) {
        setListTours(res)
        // }

    }

    const [dataDelete, setdataDelete] = useState({})
    const [dataUpdate, setdataUpdate] = useState({})
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // const handleShow = () => setShowModal(true);
    const handleCloseUpdateModal = () => {
        resetUpdateData()
        setShowUpdateModal(false)
    };
    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    const handleClickBtnUpdateTour = (tour) => {
        setShowUpdateModal(true)
        setdataUpdate(tour)
    }

    const handleClickBtnDeleteTour = (tour) => {
        setShowDeleteModal(true);
        setdataDelete(tour);
        console.log('check tour', tour);
    };

    const resetUpdateData = () => {
        setdataUpdate({})
    }
    return (
        <>
            <div className="container">
                <hr />
                <div className="add-new-title">ADD NEW TOUR</div>
                <CreateNewTour
                    fetchListTours={fetchListTours}
                />
                <hr />
                <div className="table-title">TABLE TOURS</div>
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Tour ID</th>
                            <th scope="col">Tour Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Location</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Departure Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTours && listTours.length > 0 &&
                            listTours.map((item, index) => {
                                console.log('check', item.quantity)
                                return (
                                    <tr key={`table-tours-${index}`}>
                                        <td>{item.tourId}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.location}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.departureDate}</td>
                                        <td>
                                            <button className="btn btn-warning mx-3"
                                                onClick={() => { handleClickBtnUpdateTour(item) }}
                                            >Update</button>
                                            <ModalUpdateTour
                                                show={showUpdateModal}
                                                handleClose={handleCloseUpdateModal}
                                                dataUpdate={dataUpdate}
                                                fetchListTours={fetchListTours}
                                            // resetUpdateData={resetUpdateData}
                                            />


                                            <button className="btn btn-danger mx-3"
                                                onClick={() => { handleClickBtnDeleteTour(item) }}
                                            >Delete</button>

                                            <ModalDeleteTour
                                                show={showDeleteModal}
                                                handleClose={handleCloseDeleteModal}
                                                dataDelete={dataDelete}
                                                fetchListTours={fetchListTours}
                                            />
                                        </td>
                                    </tr>

                                )

                            })}
                        {listTours && listTours.length === 0 && <tr><td colSpan={7}>Not found data</td></tr>}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ManageTour;