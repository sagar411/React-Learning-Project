import DataTable from "react-data-table-component";
import { useState ,useEffect} from "react";
import { BreadCrumb } from "../../../components/cms/breadcrumb.component";
import { ActionButtons } from "../../../components/action-btns/action-btns.component";
import { getAllBrand } from "../../../services/brand.services"
import { LoadImage } from "../../../components/image-view/load-image.component";
import { toast } from "react-toastify";
import { deleteBrandById } from "../../../services/brand.services";
const BrandListPage = () => {

    const deleteBrand =async(id)=>{
        let replay = await deleteBrandById(id);
        if(replay.status){
            toast.success(replay.msg);
            getBrandData();
        }else{
            toast.error(replay.msg)
        }
    }
    let [data,setData] = useState([]);

    const columns = [
        {
            name:"Title",
            selector: row =>row.title
        },
        {
            name:"Image",
            selector: row => <>{row.image ? <LoadImage src ={row.image}/>:"-"}</>
        },
        {
            name:"Status",
            selector:row => row.status
        },{
            name:"Action",
            selector:row =><ActionButtons id={row._id} handleDelete={deleteBrand} entity="brand"></ActionButtons>
        }

    ]
    const getBrandData = async ()=>{
        try{
            let response  = await getAllBrand();
            console.log(response);
            if(response.status){
                setData(response.result);
            }

        }catch(error){
            console.log("Error", error)
        }
    }
    useEffect(()=>{
        getBrandData();
    },[])

    return (<>
        <div className="container-fluid px-4">
            <BreadCrumb
                title="Brand Page"
                pageTitle="Brand List"
                addBtn={true}
                path="/admin/brand/create"
                page="Brand"
            ></BreadCrumb>

        <div className="card mb-4">
         <DataTable
            columns={columns}
            data={data}
            pagination
         />

        </div>

        </div>

    </>)
}
export default BrandListPage;