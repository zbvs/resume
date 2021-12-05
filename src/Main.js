import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import style from "./style.module.scss";
import Renderer from "./components/Renderer";
import {grid} from "./Grid";

export default function Main() {

    return (
        <Container>
            <div style={{marginTop: "100px"}}></div>
            <Row>
                <Col xs={grid.margin}></Col>
                <Col xs={12 - grid.margin} className={style.main}>
                    <Renderer/>
                </Col>
                <Col xs={grid.margin}></Col>
            </Row>
        </Container>
    )
}
