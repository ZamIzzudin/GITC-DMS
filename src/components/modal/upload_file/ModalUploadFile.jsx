import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { AsyncUploadFileOfferLetter } from '../../../state/offering/middleware';
import { AsyncUploadFileConfirmLetter } from '../../../state/confirm/middleware';

import Inputfile from "../../tools/inputFile"

const ModalUploadFile = ({ show, setShow, data, letter }) => {
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const year = data.created_at ? new Date(data.created_at).getFullYear() : null

    const handleClose = () => {
        setShow(false);
    }

    function handleUploadFile() {
        if (letter === "confirm") {
            dispatch(AsyncUploadFileConfirmLetter(data._id, {
                file: file.file,
                year: year
            }))
        }
        if (letter === "offer") {
            dispatch(AsyncUploadFileOfferLetter(data._id, {
                file: file.file,
                year: year
            }))
        }
    }
    console.log(data)

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
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button s
                        tyle={{ border: "none", backgroundColor: "#164391" }}
                        onClick={() => handleUploadFile()}
                    >
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUploadFile