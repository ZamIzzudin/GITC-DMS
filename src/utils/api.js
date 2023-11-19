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
        console.log(response.data)
        return response;
    }

    return {
        Login
    };
})()

export default api;

