import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { BreadCrumb } from "../../../components/cms/breadcrumb.component"
import LabelFormComponent from "../../../components/cms/label-form.component"
import { useState,useEffect } from "react"
import { getBrandById, updateBrand } from "../../../services/brand.services"

const BrandEditPage =()=>{
    let params = useParams();
    let navigate = useNavigate();
    let [data, setData] = useState();
    
    const handleUpdateAction = async (data)=>{
        try{
                let response = await updateBrand(data, params.id);
                if(response.status){
                    toast.success(response.msg)
                }else{
                    toast.error(response.msg)
                }
                navigate("/admin/brand")
        }catch(error){
            console.log(error)
        }
    }

    const getBrandData = async()=>{
        try{
            let response = await getBrandById(params.id);
            if(response.status){
                setData(response.result)
            }
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getBrandData();
    }, [params])
    return(<>
    <div className="container-fluid px-4">
                <BreadCrumb title="Brand Updatae Page" pageTitle="Brand Update" addBtn={false}  page="Brand" />
                <div className="card mb-4">
                    <div className="card-body">
                        <LabelFormComponent 
                          onSubmitEvent={handleUpdateAction}
                            type="brand"
                            data = {data}
                        />
                    </div>
                </div>
            </div>
       
    
    </>)
}

export default BrandEditPage;