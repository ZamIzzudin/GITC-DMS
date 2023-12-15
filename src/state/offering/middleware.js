import { GetOffersAction } from "./action";
import api from "../../utils/api";

import { showLoading, hideLoading } from "react-redux-loading-bar";


function AsyncGetOfferings(page = 1) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const response = await api.GetOfferingLetter(page);
            dispatch(GetOffersAction(response.data.data));
        } catch (err) {
            console.error(err);
            dispatch(GetOffersAction([]));
        }
        dispatch(hideLoading());
    }
}

function AsyncCreateLetter(payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.CreateOffer(payload);

            if (response.info !== undefined) {
                throw new Error()
            } else {
                const data = await api.GetConfirmLetter(1);
                dispatch(GetOffersAction(data.data.data))
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

export { AsyncGetOfferings, AsyncCreateLetter }