import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { cancelOrder } from '../../Services/apiService';
import { toast } from 'react-toastify';

const ModalCancelOrder = ({ show, handleClose, dataCancel, fetchListOrders }) => {

    const handleSubmitCancelOrder = async () => {

        let data = await cancelOrder(dataCancel.orderId);
        console.log("check res", data)
        if (data && data.message === "Cancelled Successfully") {
            toast.success(data.message);
            // handleSuccess();
            handleClose()
            await fetchListOrders()

        }
        if (data && data.errCode === 0) {
            toast.error(data.errMessage);
        }
    }



    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} >
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Cancel the Order?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure cancel this order. Order ID = <b>{dataCancel && dataCancel.orderId ? dataCancel.orderId : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCancelOrder}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default ModalCancelOrder;