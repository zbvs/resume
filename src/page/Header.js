import {Col, Row} from "react-bootstrap";
import style from "../style.module.scss";
import ReactMarkdown from "react-markdown";

export default function Header(props) {
    const {lines} = props;

    const verticalDivider = lines.find(e => e.startsWith("***"))
    lines.indexOf(verticalDivider)

    const left = lines.slice(0, lines.indexOf(verticalDivider) - 1).join("\n");
    const right = lines.slice(lines.indexOf(verticalDivider) + 1).join("\n");

    return (
        <Row>
            <Col xs={6} className={style.header_left}>
                <ReactMarkdown>{left}</ReactMarkdown>
            </Col>
            <Col className={style.header_right}>
                <ReactMarkdown>{right}</ReactMarkdown>
            </Col>
        </Row>
    )
}
