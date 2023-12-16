import { GetConfirmsAction } from "./action";
import api from "../../utils/api";

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

// function AsyncEditUser(id, payload) {
//     return async dispatch => {
//         dispatch(showLoading())
//         try {
//             const response = await api.EditUser(id, payload);

//             if (response.info !== undefined) {
//                 throw new Error()
//             }
//             dispatch(AsyncGetUsers())

//         } catch (err) {
//             console.error(err);
//             console.log('erorr')
//         }
//         dispatch(hideLoading())
//     }
// }

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

export { AsyncGetConfirms, AsyncCreateLetter }