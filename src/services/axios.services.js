import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3006",
    timeout:30000,
    timeoutErrorMessage:"Server time out",
    headers:{
        "Content-Type":"application/json"
    }
    
})

export const postRequest = (url, data)=>{
    return axiosInstance.post(url,data);
}