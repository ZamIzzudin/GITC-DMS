import api from "../../utils/api";
import axios from 'axios'
import cookies from "../../utils/cookie";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { LoginAction, LogoutAction, RefreshTokenAction } from "../auth/action"
import { IsLoading, IsntLoading } from '../loading/middleware'

function AsyncLogin({ username, password }) {
    return async dispatch => {
        dispatch(showLoading())
        dispatch(IsLoading())
        try {
            const response = await api.Login(username, password);
            cookies.remove("refreshToken");
            cookies.add("refreshToken", response.data.access_token, 7);

            const data = {
                token: response.data.access_token,
                username: response.data.username,
                display_name: response.data.display_name,
                role: response.data.role,
            }
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
            sessionStorage.setItem('dms_login_info', JSON.stringify(data))
            dispatch(LoginAction(data));
            window.location.replace("/home");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Cannot Login!',
                text: 'Check your email and password.',
                showConfirmButton: false,
                timer: 3000
            })
        }
        dispatch(hideLoading())
        dispatch(IsntLoading())
    }
}

function AsyncCheckLogin() {
    return async dispatch => {
        try {
            let auth_data = JSON.parse(sessionStorage.getItem("dms_login_info"));

            //Setup Cookies
            cookies.remove("refreshToken");
            cookies.add("refreshToken", auth_data.token, 7);

            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${auth_data.token}`;
            sessionStorage.setItem("dms_login_info", JSON.stringify(auth_data));

            // Pass to Action
            dispatch(LoginAction(auth_data));
        } catch (err) {
            console.error(err)
        }
    }
}

function AsyncRegister(payload) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.CreateUser(payload);

            if (response.info !== undefined) {
                throw new Error()
            }
            console.info(response)

        } catch (err) {
            console.error(err);
            console.log('erorr')
        }
        dispatch(hideLoading())
    }
}

function AsyncRefreshToken() {
    return async dispatch => {
        try {
            const response = await api.Refresh()
            // cookies.remove('token')
            cookies.add('refreshToken', response.data.accessToken, 7)

            let auth_data = JSON.parse(sessionStorage.getItem('bmt_login_data'));
            auth_data.token = response.data.access_token

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
            sessionStorage.setItem('bmt_login_data', JSON.stringify(auth_data))

            dispatch(RefreshTokenAction(response.data.access_token))
        } catch (err) {
            dispatch(LogoutAction())
            cookies.remove('refreshToken')
            sessionStorage.clear()

            // Set Route to default
            window.location.assign("/")
        }
    }
}

function AsyncLogout() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            dispatch(LogoutAction())
            sessionStorage.clear();
            // Set Route to default
            window.location.assign("/")
        } catch (err) {
            console.log(err)
        }

        dispatch(hideLoading())
    }
}

export { AsyncLogin, AsyncCheckLogin, AsyncRegister, AsyncRefreshToken, AsyncLogout }
