import React from 'react'
// import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AsyncDeleteUser } from '../../../state/users/middleware'


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalDeleteAccess = ({ showDeleteForm, setShowDeleteForm, rowData }) => {
    const dispatch = useDispatch()

    function handleDelete(id) {
        dispatch(AsyncDeleteUser(id))
        setShowDeleteForm(false);
    }

    const handleClose = () => {
        setShowDeleteForm(false);
    }

    return (
        <div>
            <Modal show={showDeleteForm} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Access</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure want to remove  <span style={{ fontWeight: "bold" }}>{rowData?.username}'s</span> access?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='text-bg-danger' style={{ border: "none" }} onClick={() => handleDelete(rowData?._id)}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDeleteAccess