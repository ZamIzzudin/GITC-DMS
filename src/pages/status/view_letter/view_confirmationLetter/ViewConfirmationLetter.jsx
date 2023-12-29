import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { convertToPDF } from '../../../../components/tools/convertToPDF';
import api from '../../../../utils/api'

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"

const ViewConfirmationLetter = () => {
    const pagesRef = useRef([]);
    const { id } = useParams();
    const [dataCL, setDataCL] = useState({})

    useEffect(() => {
        async function getData(id) {
            try {
                const response = await api.GetDetailConfirmLetter(id);
                setDataCL(response.data.data);
            } catch (error) {
                console.error('Kesalahan mengambil data:', error);
            }
        }
        getData(id)
    }, [id])

    const handleDownloadClick = async () => {
        const pages = pagesRef.current.filter((pageRef) => pageRef.current !== null);

        if (pages && pages.length > 0) {
            await convertToPDF(pages, "confirmationLetter");
        }
    };

    return (
        <div style={{ paddingBottom: "50px" }}>
            <div className='label-wrapper'>
                <div className={`container label`}>
                    <span>{dataCL.nomor_surat === "unset" ? 'Confirmation Letter' : dataCL.nomor_surat}</span>
                    <i className={`pi pi-download download`} style={{ fontSize: '1rem', cursor: 'pointer' }}
                        onClick={handleDownloadClick}
                    />
                </div>
            </div>
            <div className='container'>
                {Object.keys(dataCL).length !== 0 ? (
                    <ConfirmationLetter
                        data={dataCL}
                        pagesRef={pagesRef}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default ViewConfirmationLetter
