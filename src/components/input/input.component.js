import { Form } from "react-bootstrap"
export const EmailInput = ({fieldname,name,placeholder,handleChange
})=>{
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >{fieldname}</Form.Label>
                <InputComponent type="email" name={name} required placeholder={placeholder} handleChange = {handleChange}/>
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

export const InputComponent =({fieldname, type,name,placeholder,handleChange})=>{
    return(
        <>
        <Form.Label>{fieldname}</Form.Label>
        <Form.Control type={type} name={name} required placeholder={placeholder} onChange={handleChange}/>
        </>
    )
}