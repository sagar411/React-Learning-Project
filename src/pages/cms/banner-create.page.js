import { BreadCrumb } from "../../components/cms/breadcrumb.component";
import LabelFormComponent from "../../components/cms/label-form.component";
const  BannerCreatePage = () => {

    const handleAddAction =(data)=>{
        console.log("Data", data)
    }
    return (
        <>
            <div className="container-fluid px-4">
                <BreadCrumb title="Banner Creeate Page" pageTitle="Banner Create" addBtn={false}  page="Banner" />
                <div className="card mb-4">
                    <div className="card-body">
                        <LabelFormComponent 
                            onSubmit={handleAddAction}
                            type="banner"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerCreatePage;