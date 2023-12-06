import { useEffect, useState } from "react";
import { getAllOrders } from '../../Services/apiService';
import CreateNewUser from "./CreateNewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalConfirmOrder from "./ModalConfirmOrder";
import ModalCancelOrder from "./ModalCancelOrder";

const ManageOrder = (props) => {
    const [listOrders, setListOrders] = useState([
        {
            orderId: 1,
            notes: 'fd',
            status: 'we',
            totalPrice: 'r',
        },
        {
            orderId: 2,
            notes: 'fd',
            status: 'we',
            totalPrice: 'r',
        }

    ])

    //CONPONENT DID MOUNT
    useEffect(() => {
        fetchListOrders();
    }, []);

    const fetchListOrders = async () => {
        let res = await getAllOrders();
        // if (res.EC === 0) {
        setListOrders(res)
        // }

    }

    const [dataCancel, setdataCancel] = useState({})
    const [dataConfirm, setdataConfirm] = useState({})
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    // const handleShow = () => setShowModal(true);
    // const handleCloseUpdateModal = () => {
    //     resetUpdateData()
    //     setShowUpdateModal(false)
    // };
    const handleCloseConfirmModal = () => setShowConfirmModal(false);
    const handleCloseCancelModal = () => setShowCancelModal(false);

    const handleClickBtnConfirmOrder = (order) => {
        setShowConfirmModal(true)
        setdataConfirm(order)
    }

    const handleClickBtnCancelOrder = (order) => {
        setShowCancelModal(true)
        setdataCancel(order)
    }





    return (
        <>
            <div className="container">

                <div className="table-title">ORDERS</div>

                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Status</th>
                            <th scope="col">Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOrders && listOrders.length > 0 &&
                            listOrders.map((item, index) => {
                                return (
                                    <tr key={`table-orders-${index}`}>
                                        <td>{item.orderId}</td>
                                        <td>{item.notes}</td>
                                        <td>{item.status}</td>
                                        <td>{item.totalPrice}</td>
                                        <td>
                                            <button className="btn btn-danger mx-3"
                                                onClick={() => {
                                                    handleClickBtnConfirmOrder(item);
                                                    // console.log('user', item.email)
                                                }
                                                }

                                            >Confirm</button>
                                            <ModalConfirmOrder
                                                show={showConfirmModal}
                                                handleClose={handleCloseConfirmModal}
                                                dataConfirm={dataConfirm}
                                                fetchListOrders={fetchListOrders}
                                            // resetUpdateData={resetUpdateData}
                                            />

                                            <button className="btn btn-danger mx-3"
                                                onClick={() => {
                                                    handleClickBtnCancelOrder(item);
                                                    // console.log('user', item.email)
                                                }
                                                }

                                            >Cancel</button>
                                            <ModalCancelOrder
                                                show={showCancelModal}
                                                handleClose={handleCloseCancelModal}
                                                dataCancel={dataCancel}
                                                fetchListOrders={fetchListOrders}
                                            // resetUpdateData={resetUpdateData}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        {listOrders && listOrders.length === 0 && <tr><td colSpan={5}>Not found data</td></tr>}
                    </tbody>
                </table>

                {/* <ModalDeleteUser /> */}
            </div >

        </>
    )
}

export default ManageOrder;