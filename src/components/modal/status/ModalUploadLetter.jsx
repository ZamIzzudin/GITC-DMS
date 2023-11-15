import React from 'react'

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModalUploadLetter = ({ showUploadForm, setShowUploadForm, letterOption }) => {

    const handleClose = () => {
        setShowUploadForm(false);
    }

    return (
        <div>
            <Modal show={showUploadForm} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create {letterOption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                // value={username}
                                onChange={(e) => setUsername(e.target.value.trim())}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password"
                        >
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder="password"
                                rows={3}
                                // value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="role"
                        >
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                // value={role}
                                onChange={e => setRole(e.target.value)}
                            >
                                <option>admin</option>
                                <option>guest</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: "#164391", border: "none" }} onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUploadLetter