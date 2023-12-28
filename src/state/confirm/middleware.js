import { GetConfirmsAction } from "./action";
import api from "../../utils/api";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetConfirms(page = 1) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const response = await api.GetConfirmLetter(page);
            dispatch(GetConfirmsAction(response.data.data));
        } catch (err) {
            console.error(err);
            dispatch(GetConfirmsAction([]));
        }
        dispatch(hideLoading());
    }
}
function AsyncGetConfirmById(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const response = await api.GetConfirmLetterById(id);
            dispatch(GetConfirmsAction(response.data.data));
        } catch (err) {
            console.error(err);
            dispatch(GetConfirmsAction([]));
        }
        dispatch(hideLoading());
    }
}

function AsyncCreateLetter(payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.CreateConfirm(payload);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetConfirmsAction(data.data.data))
                window.location.assign("/status")
            }
        } catch (err) {
            console.error(err);
            console.log('erorr')
        }
        dispatch(hideLoading())
    }
}

function AsyncUploadLetter(payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.UploadLetter(payload);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetConfirmsAction(data.data.data))
                window.location.assign("/status")
            }
            Swal.fire({
                icon: "success",
                title: 'Upload Success',
                showConfirmButton: false,
                timer: 3000
            })
        } catch (err) {
            console.error(err);
            console.log('erorr')
            Swal.fire({
                icon: 'error',
                title: 'Upload Gagal',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
    }
}

function AsyncEditLetter(id = null, payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.EditConfirmLetter(id, payload);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetConfirmsAction(data.data.data))
                window.location.assign("/status")
            }
            Swal.fire({
                icon: "success",
                title: 'Update Success',
                showConfirmButton: false,
                timer: 3000
            })
        } catch (err) {
            console.error(err);
            console.log('error edit letter')
            Swal.fire({
                icon: 'error',
                title: 'Update failed',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
    }
}

function AsyncRevisiLetter(id = null, paylaod) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            console.log(paylaod)
            const response = await api.RevisiConfirmLetter(id, paylaod);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetConfirmsAction(data.data.data))
                window.location.assign("/status")
            }
            Swal.fire({
                icon: "success",
                title: 'Success added revision',
                showConfirmButton: false,
                timer: 3000
            })
        } catch (err) {
            console.error(err);
            console.log('error need revision')
            Swal.fire({
                icon: 'error',
                title: 'Revision Input Failed',
                // text: 'Check your email and password.',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
    }
}

function AsyncApproveLetter(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.ApproveCofirmLetter(id);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetConfirmsAction(data.data.data))
                window.location.assign("/status")
            }
            Swal.fire({
                icon: "success",
                title: 'Success Approve Letter',
                showConfirmButton: false,
                timer: 3000
            })
        } catch (err) {
            console.error(err);
            console.log('erorr')
            Swal.fire({
                icon: 'error',
                title: 'Approve Letter Failed',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
    }
}

function AsyncUploadFileConfirmLetter(id = null, payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.UploadFileConfirmLetter(id, payload);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetConfirmsAction(data.data.data))
                window.location.assign("/status")
            }
            Swal.fire({
                icon: "success",
                title: 'Upload File Success',
                showConfirmButton: false,
                timer: 3000
            })
        } catch (err) {
            console.error(err);
            console.log('erorr')
            Swal.fire({
                icon: 'error',
                title: 'Upload File Failed',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
    }
}

// function AsyncDeleteUser(id) {
//     return async dispatch => {
//         dispatch(showLoading());
//         try {
//             const response = await api.DeleteUser(id);
//             if (response.info !== undefined) {
//                 throw new Error()
//             }
//             dispatch(AsyncGetUsers())
//         } catch (err) {
//             console.error(err);
//             dispatch(GetUsersActions([]));
//         }
//         dispatch(hideLoading());
//     }
// }

export { AsyncGetConfirms, AsyncCreateLetter, AsyncUploadLetter, AsyncGetConfirmById, AsyncEditLetter, AsyncRevisiLetter, AsyncApproveLetter, AsyncUploadFileConfirmLetter }