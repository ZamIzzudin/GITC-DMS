import axios from "axios";

const api = (() => {

    const baseUrl = "https://vze-garuda-api.vercel.app";

    //AUTH
    async function Login(username, password) {
        const url = baseUrl + "/auth/login";
        const data = {
            username,
            password
        };

        const response = await axios.post(url, data)
        // console.log(response.data)
        return response;
    }

    async function Refresh() {
        const url = baseUrl + "/auth/refresh";

        try {
            const response = await axios.get(url, {
                credentials: "include",
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async function Logout() {
        const url = baseUrl + "/auth/logout";

        const response = await axios.get(url);

        return response;
    }

    // async function GetUsers(type) {

    // }

    async function CreateUser(payload) {
        const url = baseUrl + "/auth/register";
        const data_register = {
            username: payload.username,
            display_name: payload.displayName,
            password: payload.password,
            role: payload.role
        }
        const response = await axios.post(url, data_register);
        return response;
    }

    async function DeleteUser(id) {
        const url = baseUrl + `auth/takedown/${id}`;
        const response = await axios.delete(url);
        return response;
    }

    return {
        Login,
        Refresh,
        Logout,
        CreateUser,
        DeleteUser
    };


})()

export default api;

