import { useParams, useSearchParams } from "react-router-dom";

const ProductDetail = ()=>{
    //product/product_id
    let param = useParams();

    let slug = param.slug;
     let [query ,setQuery]= useSearchParams();

     let query_value = query.get("id")

    return (
        <>
       <h1>{slug}</h1> 
       <h1>{query_value}</h1>
        </>
    )

    
}
export default ProductDetail;