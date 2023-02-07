import { ErrorResponse } from '@remix-run/router';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { BreadCrumb } from "../../components/cms/breadcrumb.component";
import { deleteBannerById, getAllBanners } from '../../services/banner.service';
import { LoadImage } from '../../components/image-view/load-image.component';
import { ActionButtons } from '../../components/action-btns/action-btns.component';
import {toast} from"react-toastify"
const BannerListPage = () => {
    const deleteBanner =async (id)=>{
       try{
        let replay = await deleteBannerById(id);
        if(replay.status){
            toast.success(replay.msg)
            getBannerData();
        }else{
            toast.error(replay.msg);

        }
       }catch(error){
        console.log(error);
       }
    }
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Image',
            selector: row => <>{row.image ?<LoadImage src ={row.image}/>: "-"}</>//row.image,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Action',
            selector: row => <ActionButtons id={row._id} handleDelete = {deleteBanner} entity = "banner"></ActionButtons>,
        },
    ];

    let [data,setData]  = useState([]);

    const getBannerData  =async()=>{
        try{
            let response =await getAllBanners();
            if(response.status){
                setData(response.result)
            }
        }catch(error){
            console.log("Err", error)
        }
    }
    useEffect(() => {
        getBannerData();
    }, [])

   
    return (
        <>

            <div className="container-fluid px-4">
            <BreadCrumb title="Banner Page" pageTitle="Banner List" addBtn={true} path="/admin/banner/create" page="Banner" />
            
                <div className="card mb-4">
                    <div className="card-body">
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                        />
                    </div>
                </div>
                {/* <div style={{height: "100vh"}}></div> */}
                {/* <div className="card mb-4"><div className="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div> */}
            </div>
        </>
    )
}
export default BannerListPage;