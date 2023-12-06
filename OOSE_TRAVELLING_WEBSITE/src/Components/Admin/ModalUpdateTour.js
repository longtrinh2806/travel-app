import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { putUpdateTour } from '../../Services/apiService';
import { toast } from 'react-toastify';

const ModalUpdateTour = ({ show, handleClose, dataUpdate, fetchListTours }) => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [price, setPrice] = useState();
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [quantity, setQuantity] = useState();
    const [departureDate, setDepartureDate] = useState('');


    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            //update
            setTitle(dataUpdate.title)
            setDescription(dataUpdate.description)
            setImageURL(dataUpdate.imageURL)
            setPrice(dataUpdate.price)
            setLocation(dataUpdate.location)
            setDuration(dataUpdate.duration)
            setQuantity(dataUpdate.quantity)
            setDepartureDate(dataUpdate.departureDate)
        }

    }, [dataUpdate])


    const handleSubmitUpdateTour = async () => {
        let data = await putUpdateTour(dataUpdate.tourId, title, description, imageURL, price, location, duration, quantity, departureDate)
        console.log("check res", data)

        if (data && data.message === "Updated Tour Successfully") {
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
            {/* <Button variant="primary" onClick={handleShow}>
                Add new users
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static'
                className='modal-update-tour'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-5">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description:</label>
                                <textarea className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image URL:</label>
                                <input type="text" className="form-control" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={price}
                                    onChange={(event) => {
                                        const value = event.target.value.replace(/[^\d]/g, ''); // Lọc chỉ giữ lại các chữ số
                                        setPrice(value === '' ? 0 : parseInt(value, 10));
                                    }}
                                />
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                <input type="text" className="form-control" value={location} onChange={(event) => setLocation(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Duration:</label>
                                <input type="text" className="form-control" value={duration} onChange={(event) => setDuration(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={quantity}
                                    onChange={(event) => {
                                        const value = event.target.value.replace(/[^\d]/g, ''); // Lọc chỉ giữ lại các chữ số
                                        setQuantity(value === '' ? 0 : parseInt(value, 10));
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Departure Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={departureDate}
                                    onChange={(event) => setDepartureDate(event.target.value)}
                                />
                            </div>

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitUpdateTour() }}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateTour;