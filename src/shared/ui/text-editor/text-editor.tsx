import React, { FC, useRef, useState } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import styles from "./text-editor.module.scss"
import { TextEditorProps } from "./types";

export const TextEditor: FC<TextEditorProps> = ({
    labelName,
    placeholder,
    desc,
    ...props
}) => {
    const [value, setValue] = useState<string>("")
    const quillRef = useRef<ReactQuill>(null);

    const handleChange = (content: string) => {
        const text = quillRef.current?.editor?.getText() || ""
        if (text.length <= 750) {
            setValue(content)
        } else alert("Превышено количество символов.")
    }

    const module2 = {
        toolbar: [
            ['bold', 'italic', 'underline'],        // toggled buttons
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }]
        ],
    }

    return (
        <div className={styles.textEditor}>
            <div className={styles.container}>
                <p className={styles.title}>{labelName}</p>
                <div className={styles.editor}>
                    <ReactQuill
                        ref={quillRef}
                        placeholder={placeholder}
                        modules={module2}
                        theme="snow" value={value}
                        onChange={handleChange}
                        className={styles.inputMain}
                        { ...props }
                    />
                </div>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    );
}


