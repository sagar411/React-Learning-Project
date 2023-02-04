import { BreadCrumb } from "../../components/cms/breadcrumb.component";
import LabelFormComponent from "../../components/cms/label-form.component";
import { bannerCreate } from "../../services/banner.service";
const  BannerCreatePage = () => {

    const handleAddAction =async(data)=>{
        // console.log("Data", data)
        //we have to write form data method 
        try {
          let response =  await bannerCreate(data);
          console.log("response", response)
        }catch(error){
            console.log("error", error)
        }
    }
    
    return (
        <>
            <div className="container-fluid px-4">
                <BreadCrumb title="Banner Creeate Page" pageTitle="Banner Create" addBtn={false}  page="Banner" />
                <div className="card mb-4">
                    <div className="card-body">
                        <LabelFormComponent 
                          onSubmitEvent={handleAddAction}
                            type="banner"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerCreatePage;