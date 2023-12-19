import api from "../../utils/api";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

import { GetUsersActions } from "./action";
import { showLoading, hideLoading } from "react-redux-loading-bar";


function AsyncGetUsers(type, search) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const response = await api.GetUsers(type, search);
            dispatch(GetUsersActions(response.data.data));
        } catch (err) {
            console.error(err);
            dispatch(GetUsersActions([]));
        }
        dispatch(hideLoading());
    }
}

function AsyncAddUser(payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.CreateUser(payload);

            if (response.info !== undefined) {
                throw new Error()
            }
            dispatch(AsyncGetUsers())

            Swal.fire({
                icon: "success",
                title: 'Add User Success',
                showConfirmButton: false,
                timer: 3000
            })

        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Add User Failed',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
    }
}

function AsyncEditUser(id, payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.EditUser(id, payload);

            if (response.info !== undefined) {
                throw new Error()
            }
            dispatch(AsyncGetUsers())

            Swal.fire({
                icon: "success",
                title: 'Edit Profile Success!',
                showConfirmButton: false,
                timer: 3000
            })

        } catch (err) {
            console.error(err);
            console.log('erorr')
        }
        dispatch(hideLoading())
    }
}

function AsyncDeleteUser(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const response = await api.DeleteUser(id);
            if (response.info !== undefined) {
                throw new Error()
            }
            dispatch(AsyncGetUsers())

            Swal.fire({
                icon: "success",
                title: 'Remove User Success',
                showConfirmButton: false,
                timer: 3000
            })

        } catch (err) {
            console.error(err);
            dispatch(GetUsersActions([]));
        }
        dispatch(hideLoading());
    }
}

export { AsyncGetUsers, AsyncDeleteUser, AsyncAddUser, AsyncEditUser }