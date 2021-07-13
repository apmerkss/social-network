import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6f7f3ecd-ed5e-4ed6-a0ce-111fd29fbd86'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },

    toggleFollowUser: (userId, isFollow) => {
        if (isFollow) {
            return instance.delete(`follow/${userId}`).then(response => {
                return response.data
            });
        }

        return instance.post(`follow/${userId}`, null).then(response => {
            return response.data
        });
    },
}

export const authAPI = {
    getUserProfile: (userId) => {
        return instance.get('profile/' + userId).then(response => {
            debugger
            return response.data
        });
    },

    getCurrentUserProfile: () => {
        return instance.get('/auth/me').then(response => {
            debugger
            return response.data
        });
    }
}

