import { Alert, Col, Container, Row } from "react-bootstrap";
import HeaderComponent from "../../components/header.component";

const ErrorPage=()=>{
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <Container>
                <Row>
                    <Col>
                        <Alert variant="danger">
                            404! Not Found
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ErrorPage;