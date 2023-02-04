import axios from "axios";

const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    timeout:30000,
    timeoutErrorMessage:"Server time out",
    headers:{
        "Content-Type":"application/json"
    }
    
})
let headers = {}

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

const getHeaders = (is_strict, form_data=false)=>{
    if(is_strict){
        let token = localStorage.getItem("token")
        headers = {
            ...headers,
            headers:{
                "authorization":"Bearer "+token
            }
        }
        if(form_data){
            headers ={
                ...headers,
                headers :{
                    "content-type":"multipart/form-data",
                    ...headers.headers
                }
            }
        }
        
    }
}
export const postRequest = (url, data,is_strict=false, form_data = false)=>{
    getHeaders(is_strict,form_data)
   
    return axiosInstance.post(url,data,headers);
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