import { useState, useRef, useEffect } from 'react'

import style from "./inputFile.module.css"

export default function InputImage({ getData, currentData }) {
    const [showFile, setShowFile] = useState(currentData?.detail || currentData || null)

    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const addFileButton = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file !== undefined) {
            handleFile(file)
        }
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file !== undefined) {
            handleFile(file)
        }
    };

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = function () {
            const { result } = reader;
            const detail = {
                src: result,
                name: file.name,
            };
            setShowFile(detail);
            getData({
                file,
                detail,
            })
        };
        reader.readAsDataURL(file);
    }

    function deleteImage() {
        setShowFile(null);
        getData(null)
    }

    useEffect(() => {
        setShowFile(currentData?.detail || currentData || null)
    }, [currentData])

    return (
        <div className={style.input_area}>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={style.form_file}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    accept="application/pdf"
                />
                {showFile ? (
                    <>

                        <div className={style.file_display_card}>
                            <i className="pi pi-file-pdf" style={{ fontSize: '2rem' }}></i>
                            <span>
                                {showFile?.name || showFile}
                            </span>
                        </div>
                    </>
                ) : (
                    <div className={style.non_file_display_card} onClick={addFileButton}>
                        <span>Drag and drop here</span>
                        <span>Or</span>
                        <span className={style.text_browse}>Browse</span>
                    </div>
                )}
                <div className={style.cta_button}>
                    <button type="button" onClick={addFileButton}>Select file</button>
                    {showFile ? (<button onClick={() => deleteImage()}>Delete</button>) : null}
                </div>
            </div>
        </div>
    )
}