import axios from "axios";

const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    timeout:30000,
    timeoutErrorMessage:"Server time out",
    headers:{
        "Content-Type":"application/json"
    }
    
})

axiosInstance.interceptors.response.use((response)=>{
    if(response.status ===200){
        return response.data
    }else if(response.status ===403){
        localStorage.clear();
    }else{
        console.log("Error Interceptor", response);
        return response;
    }
})
export const postRequest = (url, data)=>{
    return axiosInstance.post(url,data);
}

export const  getRequest = (url, is_strict = false)=>{
    let headers = {

    }
    if(is_strict){
        let token = localStorage.getItem("token")
        headers = {
            headers:{
                "authorization" : "Bearer " +token
            }
        }                     
    }
  
    return axiosInstance.get(url, headers);

}