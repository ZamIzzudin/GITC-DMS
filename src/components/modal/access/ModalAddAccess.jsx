import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { AsyncAddUser } from '../../../state/users/middleware';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModalAddAccess = ({ showAddForm, setShowAddForm }) => {
    const [username, setUsername] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const [password, setPassword] = useState(null);
    const [role, setRole] = useState('Admin');
    const dispatch = useDispatch();

    const handleClose = () => {
        setShowAddForm(false);
    }

    const handleAddAccess = (e) => {
        e.preventDefault();
        console.log("klik")
        try {
            dispatch(AsyncAddUser({ username, displayName, password, role }));
            handleClose()
        } catch (err) {
            console.error(err);
        } finally {
            console.log("done")
        }
    }

    return (
        <div>
            <Modal show={showAddForm} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Access</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddAccess}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value.trim())}
                                autoFocus
                                required
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
                                placeholder="password"
                                rows={3}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="role"
                        >
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                value={role}
                                onChange={e => setRole(e.target.value)}
                                required
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
                    <Button style={{ backgroundColor: "#164391", border: "none" }} onClick={handleAddAccess}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalAddAccess