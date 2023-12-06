import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { confirmOrder } from '../../Services/apiService';
import { toast } from 'react-toastify';

const ModalConfirmOrder = ({ show, handleClose, dataConfirm, fetchListOrders }) => {

    const handleSubmitConfirmOrder = async () => {

        let data = await confirmOrder(dataConfirm.orderId);
        console.log("check res", data)
        if (data && data.message === "Confirmed Successfully") {
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
                    <Modal.Title>Confirm the Order?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure confirm this order. Order ID = <b>{dataConfirm && dataConfirm.orderId ? dataConfirm.orderId : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitConfirmOrder}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default ModalConfirmOrder;