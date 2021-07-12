import instance from "./instance";

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    });
}

export const toggleFollowUserAPI = (userId, isFollow) => {
    if (isFollow) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        });
    }

    return instance.post(`follow/${userId}`, null).then(response => {
        return response.data
    });
}




