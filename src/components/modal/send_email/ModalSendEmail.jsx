/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ModalSendEmail = ({ show, setShow, getData }) => {
  const [address, setAddress] = useState("");
  const handleClose = () => {
    setShow(false);
    setAddress("");
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0" }}>
          <Form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form.Control
              style={{ width: "90%" }}
              type="text"
              placeholder="Email Address"
              required
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            s
            tyle={{ border: "none", backgroundColor: "#164391" }}
            onClick={() => getData(address)}
          >
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalSendEmail;
