import { useFormik } from "formik";
import * as Yup from "yup";
const LabelFormComponent = ({type,onSubmitEvent})=>{
    let validationSchema = Yup.object().shape({

    })
    let formik = useFormik({
        initialValues:{
            title:null,
            link:null ,
            image:null,
            status: null,
            type:type

        },

        validationSchema:validationSchema

    })
    return (<>

    </>)
}
export default LabelFormComponent;