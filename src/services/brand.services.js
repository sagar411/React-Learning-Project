import { getRequest } from "./axios.services";

export const getAllBrand = async ()=>{
    try{
        let brand = await getRequest("/label?type=brand");
        return brand;
    }catch(error){
        console.log(error);
    }
}