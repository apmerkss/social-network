import instance from "./instance";

const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
}

export default usersAPI;
