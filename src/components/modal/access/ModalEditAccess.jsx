import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { AsyncEditUser } from '../../../state/users/middleware';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModalEditAccess = ({ showEditForm, setShowEditForm, rowData }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(rowData.username);
    const [password, setPassword] = useState(rowData.password);
    const [displayName, setDisplayName] = useState(rowData.display_name);
    const [role, setRole] = useState(rowData.role);

    const handleClose = () => {
        setShowEditForm(false);
    }

    function handleEdit(id) {
        const payload = {
            username,
            password,
            displayName,
            role
        }
        dispatch(AsyncEditUser(id, payload))
        setShowEditForm(false);
    }

    return (
        <div>
            <Modal show={showEditForm} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Access</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value.trim())}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="display_name">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="display name"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value.trim())}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                rows={3}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="role"
                        >
                            <Form.Label>Role</Form.Label>
                            <Form.Select value={role}
                                onChange={e => setRole(e.target.value)}
                            >
                                <option>Admin</option>
                                <option>Guest</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='text-bg-success' style={{ border: "none" }} onClick={() => handleEdit(rowData?._id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalEditAccess