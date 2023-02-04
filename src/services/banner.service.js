import { postRequest } from "./axios.services";

export const  bannerCreate =async(data)=>{
    try {
        let formData = new FormData();

        if(data.image){
            formData.append("image", data.image, data.image.name);
            delete data.image;
        }

        Object.keys(data).map((key)=>{
            formData.append(key,data[key])
            return;
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