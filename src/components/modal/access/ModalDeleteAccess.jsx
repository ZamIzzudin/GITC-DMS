import React from 'react'
// import { useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalDeleteAccess = ({ showDeleteForm, setShowDeleteForm, rowData }) => {

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
                    <p>Are you sure want to remove  <span style={{ fontWeight: "bold" }}>{rowData.username}'s</span> access?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='text-bg-danger' style={{ backgroundColor: "#164391", border: "none" }} onClick={handleClose}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDeleteAccess