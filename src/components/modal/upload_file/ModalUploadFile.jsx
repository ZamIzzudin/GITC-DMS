import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Inputfile from "../../tools/inputFile"

const ModalUploadFile = ({ show, setShow, data }) => {

    const [file, setFile] = useState(null)

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Upload File</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "0" }}>
                    <Inputfile getData={setFile} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ border: "none", backgroundColor: "#164391" }} onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUploadFile