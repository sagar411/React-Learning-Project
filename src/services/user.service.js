import { postRequest } from "./axios.services"

export const registerUser =async (data)=>{
    try{
        let response = await postRequest("/user",data);
        return response.data;
    }catch(error){
        throw error.message;
    }
}