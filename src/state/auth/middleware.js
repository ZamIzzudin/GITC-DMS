import api from "../../utils/api";
import axios from 'axios'
import cookies from "../../utils/cookie";

import { LoginAction } from "../auth/action"

function AsyncLogin({ username, password }) {
    return async dispatch => {
        // loading
        console.log("test")
        try {
            const response = await api.Login(username, password);
            cookies.remove("refreshToken");
            cookies.add("refreshToken", response.data.access_token, 7);

            const data = {
                role: response.data.role,
                username: response.data.username,
                token: response.data.access_token,
            }
            // console.log(response.role)

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
            sessionStorage.setItem('dms_login_info', JSON.stringify(data))
            dispatch(LoginAction(data));
            window.location.replace("/home");
        } catch (err) {
            console.log(err)
        }
        //hideloading
    }
}

export { AsyncLogin }
