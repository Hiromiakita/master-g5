import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://enigmatic-brushlands-78712.herokuapp.com/api/",
});

export default axiosInstance;
