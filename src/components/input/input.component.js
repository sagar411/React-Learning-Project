import { useState } from "react";
import { Form } from "react-bootstrap"
export const EmailInput = ({fieldname,name,placeholder,handleChange})=>{
    let [err,setError] = useState();
    const selfHandle = (e)=>{
        
        let value  = e.target.value;
        
        if(!value){
            setError("email is readures")
        }else{
        handleChange(e)
        }
    }
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >{fieldname}</Form.Label>
                <InputComponent type="email" name={name} required placeholder={placeholder} handleChange = {selfHandle}/>
              {
                err && <em className="text-danger">{err}</em>
              }
              </Form.Group>

    )
}

export const PasswordInput = ({fieldname,name,placeholder,handleChange})=>{
return(
    <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >{fieldname}</Form.Label>
                <InputComponent type="password" name={name} required placeholder={placeholder} handleChange = {handleChange}/>
              </Form.Group>
)
}

export const InputComponent =({fieldname, type,name,placeholder,required,handleChange})=>{
    return(
        <>
        <Form.Label>{fieldname}</Form.Label>
        <Form.Control type={type} name={name} required placeholder={placeholder} onChange={handleChange}/>
        </>
    )
}