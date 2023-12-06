// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// // import { deleteUser } from '../../Services/apiService';
// import { toast } from 'react-toastify';

// const ModalDeleteUser = ({ show, handleClose, dataDelete, fetchListUsesrs }) => {



//     const handleSubmitDeleteUser = async () => {


//         let data = await deleteUser(dataDelete.userId);

//         if (data && data.message === "Sign Up Successfully") {
//             toast.success(data.message);
//             // handleSuccess();
//             handleClose()
//             await fetchListUsesrs()

//         }
//         if (data && data.errCode === 0) {
//             toast.error(data.errMessage);
//         }
//     }
//     return (
//         <>
//             {/* <Button variant="primary" onClick={handleShow} >
//                 Launch demo modal
//             </Button> */}

//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Confirm Delete the User?</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Are you sure delete this user. email = <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b></Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                     <Button variant="primary" onClick={handleSubmitDeleteUser}>
//                         Confirm
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );

// }
// export default ModalDeleteUser;