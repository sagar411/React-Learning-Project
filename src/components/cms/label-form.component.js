import { useFormik } from "formik";
import * as Yup from "yup";
import { Row, Col, Form, Button, Toast } from "react-bootstrap"
const LabelFormComponent = ({ type, onSubmitEvent }) => {
    let validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        link: Yup.string(),
        status: Yup.string(),
    })
    let formik = useFormik({
        initialValues: {
            title: null,
            link: null,
            image: null,
            status: null,
            type: type
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
           onSubmitEvent(values);
        }
    })
    return (<>
        <Row>
            <Col sm={12} md={12} className="my-1">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="row mb-3" controlId="title" >
                        <Form.Label className="col-sm-3">Title</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" size="sm" name="title" onChange={formik.handleChange} value={formik.values.title|| ""} placeholder="Enter title" />


                            {
                                formik.errors.title && formik.touched.title ? (
                                    <em className="text-danger">{formik.errors.title}</em>
                                ) : null
                            }
                        </Col>
                    </Form.Group>


                    {

                        formik.values.type === "banner" ? <>
                            <Form.Group className="row mb-3" controlId="link" >
                                <Form.Label className="col-sm-3">Link</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="url" size="sm" name="link" onChange={formik.handleChange} value={formik.values.link|| " "} placeholder="Enter title" />


                                    {
                                        formik.errors.link && formik.touched.link ? (
                                            <em className="text-danger">{formik.errors.link}</em>
                                        ) : null
                                    }
                                </Col>
                            </Form.Group>
                        </> : null

                    }


                    <Form.Group className="row mb-3" controlId="status" >
                        <Form.Label className="col-sm-3">Status</Form.Label>
                        <Col sm={9}>
                            <Form.Select size="sm" name="status" onChange={formik.handleChange} required>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </Form.Select>


                            {
                                formik.errors.status && formik.touched.status ? (
                                    <em className="text-danger">{formik.errors.status}</em>
                                ) : null
                            }
                        </Col>
                    </Form.Group>


                    <Form.Group className="row mb-3" controlId="image" >
                        <Form.Label className="col-sm-3">Image</Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" size="sm" name="image" onChange={(e) => {
                                formik.setValues({
                                    ...formik.values,
                                    image: e.target.files[0]
                                })
                            }} />
                            {
                                formik.errors.image && formik.touched.image ? (
                                    <em className="text-danger">{formik.errors.image}</em>
                                ) : null
                            }

                        </Col>
                        <Col sm={3}>

                            {
                                <img className="img img-fluid" alt="" src={formik.values.image && URL.createObjectURL(formik.values.image)} />
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3" controlId="status" >
                        <Col sm={{ offset: 3, span: 3 }}>
                            <Button variant="success"  type="submit" size="sm">
                                Submit
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </>)
}
export default LabelFormComponent;