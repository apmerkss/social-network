import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6f7f3ecd-ed5e-4ed6-a0ce-111fd29fbd86'
    }
})

export default instance;
