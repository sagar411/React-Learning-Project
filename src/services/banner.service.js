import { getRequest, postRequest } from "./axios.services";
import { deleteRequest } from "./axios.services";
export const  bannerCreate =async(data)=>{
    try {
        let formData = new FormData();

        if(data.image){
            formData.append("image", data.image, data.image.name);
            delete data.image;
        }

        Object.keys(data).map((key)=>{
            formData.append(key,data[key])
            return null;
        })
        let response = await postRequest("/label" ,formData,true,true);

        if(response.status){
            return response
        }else{
            throw false;
        }

    }catch(error){
        throw error;
    }
}
export const getAllBanners = async ()=>{
    try{
        let banners = await getRequest("/label?type=banner");
        return banners;
    }catch(error){
        //todo handle error
        console.error("ERR", error)
    }
}

export const deleteBannerById =async (id)=>{
    try{
        let response = await deleteRequest("/label/"+id, true);
        return response;
    }catch(error){
        console.log(error);
    }
}