import React, {useState} from "react";
import resume from "../markdown/resume.md";
import Header from "./Header";
import Body from "./Body";

const fetchMarkdown = (path, setter) => {
    fetch(path)
        .then(r => r.text())
        .then(mdText => {
            setter(mdText);
        });
}


export default function Renderer() {
    const [originContent, setContent] = useState("");
    fetchMarkdown(resume, setContent);

    let rendered = null;
    if (originContent.length > 0) {
        let lines = originContent.split("\n");
        const bodyDivider = lines.find(e => e.startsWith("---"))


        const headerLines = lines.slice(0, lines.indexOf(bodyDivider) - 1);
        const bodyLines = lines.slice(lines.indexOf(bodyDivider) + 1);

        rendered = (
            <>
                <Header lines={headerLines}/>
                <Body lines={bodyLines}/>
            </>
        )
    }

    return (
        <div>
            {rendered}
        </div>
    )
}