import {grid} from "../Grid"
import {Col, Row} from "react-bootstrap";
import style from "../style.module.scss";
import Type from "../Type";
const head = grid.head;
export default function Line(props) {
    const {lineData} = props;
    const {title, contents} = lineData;
    const tags = [];

    for (const [key, content] of Object.entries(contents)) {
        if (typeof content === "string")
            tags.push(<li key={key}>{content}</li>)
        else {
            const format = content;
            switch(format.type) {
                case Type.LINE_LINK: {
                    tags.push(<>
                        <a href={format.content}>{format.content}</a>
                        <br/>
                    </>)
                    break;
                }
            }

        }

    }

    return (
        <Row>
            <Col xs={head} className={style.paragraph_head}>
                {title}
            </Col>
            <Col className={style.paragraph_content}>
                <ul>
                {tags}
                </ul>
            </Col>
        </Row>
    )
}