import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

//PrimeReact
function ToastFailed({ title, message }) {
    const toast = useRef(null);
    const show = () => {
        if (toast.current) {
            toast.current.show({
                severity: 'info',
                summary: 'Info',
                detail: 'Message Content',
            })
        }
    };

    useEffect(() => {
        show()
    }, [show])
    // useEffect(() => {
    //     // if (title && message) {
    //     toast.current.show({
    //         severity: "error",
    //         summary: title,
    //         detail: message,
    //         life: 3100
    //     });
    //     // }
    // }, []);
    return (<Toast ref={toast} />)
}

//bootstraps
function InfoAlert({ title, message }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 5000); // Tampilkan selama 5 detik
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>
                {message}
            </p>
        </Alert>
    )
}

function SweetAlert() {
    return (
        Swal.fire({
            icon: 'error',
            title: 'Cannot Login!',
            text: 'Check your email and password.',
            showConfirmButton: false,
            timer: 3000
        })
    )
}
export { ToastFailed, InfoAlert, SweetAlert }
