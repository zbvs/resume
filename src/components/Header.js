import {Col, Row} from "react-bootstrap";
import style from "../style.module.scss";
import ReactMarkdown from "react-markdown";
import {grid} from "../Grid";

export default function Header(props) {
    const {lines} = props;


    const content = lines.join("\n");

    return (
        <Row>
            <Col xs={grid.head}>
                <div className={style.left_header}>
                    <img src={process.env.PUBLIC_URL + "/img/picture.jpg"} style={{maxWidth:"100%"}}/>
                </div>
            </Col>
            <Col xs={12 - grid.head}>
                <div className={style.right_header}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </Col>
        </Row>
    )
}
