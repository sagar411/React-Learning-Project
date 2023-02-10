import DataTable from "react-data-table-component";
import { BreadCrumb } from "../../../components/cms/breadcrumb.component";
import { useState,useEffect } from "react";
import { getAllCategory } from "../../../services/category.service";
import { ActionButtons } from "../../../components/action-btns/action-btns.component";

const CategoryListPage =()=>{
    const columns = [
        {
            name:"Title",
            selector: row => row.title
        },{
            name:"Image",
            selector: row => <></>
        },
        {
            name:"Status",
            selector: row =>row.status
        },{
            name: "Action",
            selector: row =><ActionButtons id={row._id} entity = "category"></ActionButtons>
        }
    ]
    let [data,setData] = useState([])

    const getCategoryData = async ()=>{
        try{

            let response = await getAllCategory();
           
            if(response.status){
                setData(response.result)
            }
        }catch(error){
            console.log("Error", error)
        }
    }
    useEffect(() => {
        getCategoryData()
    }, [])
    return(
        <>
        <div className="container-fluid px-4">
            <BreadCrumb title="Categroy List"
                pageTitle="Category List"
                addBtn ={true}
                path ="/admin/category/create"
                page = "Category"
            ></BreadCrumb>

            <div className="card mb-4">
                <div className="card-body">
                    <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    ></DataTable>

                </div>

            </div>
        </div>
        </>
    )
}
export default CategoryListPage;