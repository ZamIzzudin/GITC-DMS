import React from 'react'
import { useParams } from 'react-router-dom';


import pdf from '../../../../assets/pdf/test.pdf'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const ViewUploadFile = () => {

    const { id } = useParams();

    console.log(id)

    const url = `https://drive.google.com/file/d/1eR8zGzseegTERtRvEnP-TGNqwgdzzk78/view?usp=drivesdk`
    return (
        <div className='container' >
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <Viewer fileUrl={url} />
            </Worker>
        </div>
    )
}

export default ViewUploadFile