import Quill from "quill";
import { useEffect, useRef, useState } from "react";

interface RendererProps {
    value: string;
};

const Renderer = ({ value }: RendererProps) => {
    const [isEmpty, setIsEmpty] = useState(false);
    const rendererRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!rendererRef.current) return;

        const container = rendererRef.current;

        const quil = new Quill(document.createElement("div"), {
            theme: "snow",
        });

        quil.enable(false);

        const contents = JSON.parse(value);
        quil.setContents(contents);

        const isEmpty = quil.getText().replace(/<(.|\n)*?>/g, "").trim().length === 0;
        setIsEmpty(isEmpty);

        container.innerHTML = quil.root.innerHTML;

        return () => {
            if(container) {
                container.innerHTML = "";
            }
        };
    }, [value]);

    if(isEmpty) return null;

    return <div ref={rendererRef} className="ql-editor ql-renderer" />

};

export default Renderer;