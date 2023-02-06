import { BreadCrumb } from "../../components/cms/breadcrumb.component";
import LabelFormComponent from "../../components/cms/label-form.component";
import { bannerCreate, getBannerById } from "../../services/banner.service";
import {toast} from "react-toastify"
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateBanner } from "../../services/banner.service";
const  BannerEditPage = () => {
    let params = useParams();
    let navigate = useNavigate();

    let [data,setData]= useState();

    const handleUpdateAction =async(data)=>{
        // console.log("Data", data)
        //we have to write form data method 
        try {
             let response = await updateBanner(data, params.id);
             if(response.status){
                toast.success(response.msg)
             }else{
                toast.error(response.msg)
             }
             navigate("/admin/banner")
    }catch(error){
            console.log("error", error)
        }
    }

    const getBannerData =async()=>{
        try{
            let response = await getBannerById(params.id);
            if(response.status){
                setData(response.result);
            }
        }catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
    //one time call 
        getBannerData()

    },[params])
    
    return (
        <>
            <div className="container-fluid px-4">
                <BreadCrumb title="Banner Creeate Page" pageTitle="Banner Create" addBtn={false}  page="Banner" />
                <div className="card mb-4">
                    <div className="card-body">
                        <LabelFormComponent 
                          onSubmitEvent={handleUpdateAction}
                            type="banner"
                            data = {data}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default  BannerEditPage ;