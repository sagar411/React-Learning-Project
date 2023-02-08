import { deleteRequest, getRequest, postRequest, putRequest } from "./axios.services";

export const deleteBrandById = async (id)=>{
    try{
        let response = await deleteRequest("/label/"+id, true);
        return response;
    }catch(error){
        console.log(error);
    }
}
export const updateBrand = async (data,id)=>{
    try{
        let formData = new FormData();

        if(data.image ){
            formData.append("image", data.image, data.image.name);
            delete data.image
        }

        Object.keys(data).map((key)=>{
            formData.append(key,data[key])
            return null;
        })
        let response = await putRequest("/label/"+id ,formData,true,true)

        if(response.status){
            return response
        }else{
            throw false
        }
    }catch(error){
        throw error
    }
}
export const getBrandById = async (id)=>{
    try{
        let response = await getRequest("/label/"+id)
        return response
    }catch(error){
        console.log(error);
    }
}

export const getAllBrand = async ()=>{
    try{
        let brand = await getRequest("/label?type=brand");
        return brand;
    }catch(error){
        console.log(error);
    }
}

export const brandCreate =async(data)=>{
    try{
        let formData = new FormData();

        if(data.image){
            formData.append("image", data.image, data.image.name);
            delete data.image;
        }
        Object.keys(data).map((key)=>{
            formData.append(key,data[key])
            return null;
        })

        let response = await postRequest("/label", formData, true,true)

        if(response.status){
            return response
        }else{
            throw false;
        }
    }catch(error){
        throw error;
    }

}