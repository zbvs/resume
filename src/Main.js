import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import style from "./style.module.scss";
import Renderer from "./page/Renderer";

export default function Main() {

    return (
        <Container>
            <div style={{marginTop:"100px"}}></div>
            <Row>
                <Col xs={1}></Col>
                <Col className={style.document}>
                    <Renderer/>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}
