import { toast } from "react-toastify";
import { BreadCrumb } from "../../../components/cms/breadcrumb.component";
import LabelFormComponent from "../../../components/cms/label-form.component";
import { brandCreate } from "../../../services/brand.services";
import { useNavigate } from "react-router-dom";
const BrandCreate=()=>{
    let navigate = useNavigate();
    const handleAddAction =async( data)=>{
        
        try{
            let response = await brandCreate(data);
            
            if(response.status){
                toast.success(response.msg);
                navigate("/admin/brand")
            }else{
                toast.error(response.msg)
            }
        }catch(error){
            console.error("error",error)
        }
    }
    return(
        <>
        <div className="container-fluid px-4">
            <BreadCrumb 
                title="Brand-Crate-page"
                pageTitle="Brand Create"
                addBtn={false}
                page="Brand"
            ></BreadCrumb>
        <div className="card-body">
                <LabelFormComponent 
                    onSubmitEvent={handleAddAction}
                    type="brand"
                />

        </div>
        </div>
        </>
    )
}
export default BrandCreate;