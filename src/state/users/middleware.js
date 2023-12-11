import { GetUsersActions } from "./action";
import api from "../../utils/api";

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

        } catch (err) {
            console.error(err);
            console.log('erorr')
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
        } catch (err) {
            console.error(err);
            dispatch(GetUsersActions([]));
        }
        dispatch(hideLoading());
    }
}

export { AsyncGetUsers, AsyncDeleteUser, AsyncAddUser, AsyncEditUser }