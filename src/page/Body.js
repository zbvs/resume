import style from "../style.module.scss";
import {grid} from "../Grid"
import Line from "./Line";
import assert from 'assert';
import ReactMarkdown from "react-markdown";
import {Col, Row} from "react-bootstrap";
const head = grid.head;


function Paragraph (props) {
    let {lines} = props;
    assert(lines[0].startsWith("### "));
    const paragraphTitle = lines[0].substr(3);
    const content = lines.slice(1).join("\n");

    return (
        <Row>
            <Col xs={head} className={style.paragraph_head}>
                {paragraphTitle}
            </Col>
            <Col className={style.paragraph_content}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </Col>
        </Row>
    )

}
function Section (props) {
    let {lines} = props;
    const paragraphs = [];
    assert(lines[0].startsWith("## "));
    const sectionTitle = lines[0].substr(3);
    lines = lines.slice(1);

    let paragraphStarts = lines.filter(line => line.startsWith("### ")).map(line => lines.indexOf(line));
    assert(paragraphStarts.length > 0);
    let start = paragraphStarts[0];
    paragraphStarts = paragraphStarts.slice(1);
    for (const end of paragraphStarts) {
        paragraphs.push(<Paragraph key={start} lines={lines.slice(start, end)}/>);
        start = end;
    }
    paragraphs.push(<Paragraph key={start} lines={lines.slice(start)}/>);

    return (
        <>
            <h2>{sectionTitle}</h2>
            {paragraphs}
        </>
    )
}

export default function Body(props) {
    const {lines} = props;
    const sectnios = [];

    let sectionStarts = lines.filter(line => line.startsWith("## ")).map(line => lines.indexOf(line));
    assert(sectionStarts.length > 0);
    let start = sectionStarts[0];
    sectionStarts = sectionStarts.slice(1);
    for (const end of sectionStarts) {
        sectnios.push(<Section key={start} lines={lines.slice(start, end)}/>);
        start = end;
    }
    sectnios.push(<Section key={start} lines={lines.slice(start)}/>);

    return (
        <>
            {sectnios}
        </>
    )
}