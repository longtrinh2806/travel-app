import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteTour } from '../../Services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteTour = ({ show, handleClose, dataDelete, fetchListTours }) => {

    console.log('data delete', dataDelete)

    const handleSubmitDeleteTour = async () => {


        let data = await deleteTour(dataDelete.tourId);
        console.log("check res", data)
        if (data && data.message === "Deleted Tour Successfully") {
            toast.success(data.message);
            // handleSuccess();
            handleClose()
            await fetchListTours()

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
                    <Modal.Title>Confirm Delete the Tour?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete this tour. Tour Name = <b>{dataDelete && dataDelete.title ? dataDelete.title : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDeleteTour}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default ModalDeleteTour;