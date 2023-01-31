import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { BreadCrumb } from "../../components/cms/breadcrumb.component";
const BannerListPage = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Image',
            selector: row => row.image,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Action',
            selector: row => "",
        },
    ];

    let [data,setData]  = useState([{
        "_id": "63cd675337e66a2699ceeb61",
        "title": "Apple",
        "image": "1674405715108-ff1796431df51f9abe1c44adb0c722ca - Copy.jpg",
        "type": "brand",
        "status": "inactive",
        "createdAt": "2023-01-22T16:41:55.137Z",
        "updatedAt": "2023-01-22T16:41:55.137Z",
        "__v": 0
    },
    {
        "_id": "63cd67c737e66a2699ceeb65",
        "title": "Samsung",
        "image": "1674405831073-ff1796431df51f9abe1c44adb0c722ca - Copy.jpg",
        "type": "brand",
        "status": "inactive",
        "createdAt": "2023-01-22T16:43:51.082Z",
        "updatedAt": "2023-01-22T16:43:51.082Z",
        "__v": 0
    },
    {
        "_id": "63cd6e3a91c0ab4b6662c822",
        "title": "samsung update new",
        "image": "1674464643518-ff1796431df51f9abe1c44adb0c722ca - Copy.jpg",
        "type": "brand",
        "status": "inactive",
        "createdAt": "2023-01-22T17:11:22.126Z",
        "updatedAt": "2023-01-23T09:04:03.544Z",
        "__v": 0
    }]);
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