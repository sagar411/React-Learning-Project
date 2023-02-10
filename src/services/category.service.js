import { getRequest } from "./axios.services"

export const getAllCategory =async()=>{
    try{
        let category = await getRequest("/category");
        return category;
    }catch(error){
        console.log(error)
    }
}