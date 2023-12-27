import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import OfferingLetter from '../../../../components/letter/offering-letter/letter_template/OfferingLetter'
import OfferingInputLetter from '../../../../components/letter/offering-letter/input_letter/InputLetter'
import OfferingInputRevisi from '../../../../components/letter/offering-letter/input_revisi/InputRevisi'

import api from '../../../../utils/api';
import { AsyncEditLetter, AsyncRevisiLetter, AsyncApproveLetter } from '../../../../state/offering/middleware';

import Style from "./editLetter.module.css"

const EditOfferingLetter = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [dataOL, setDataOL] = useState({})
    const [editDataOL, setEditDataOL] = useState({})
    const [showRevisiForm, setShowRevisiForm] = useState(false);
    const [revisi, setRevisi] = useState([])

    const cleanedRevisi = revisi.filter((value) => value !== undefined && value !== null && value.trim() !== null && value.trim() !== '');


    console.log(revisi)
    console.log(cleanedRevisi)

    async function getData(id) {
        try {
            const response = await api.GetDetailOfferingLetter(id);
            setDataOL(response.data.data);
            setRevisi(response.data.data.revisi)
            const updatedLetterData = {
                nomor_surat: response.data.data.nomor_surat || "",
                nama_penerbit: response.data.data.nama_penerbit || "",
                tanggal_surat: response.data.data.tanggal_surat || "",
                perihal: response.data.data.perihal || "",
                media_ref: response.data.data.media_ref || "",
                tanggal_ref: response.data.data.tanggal_ref || "",
                jenis_permohonan: response.data.data.jenis_permohonan || "",
                catatan: response.data.data.catatan || "",
                nama_tertuju: response.data.data.nama_tertuju || "",
                jabatan: response.data.data.jabatan || "",
                nama_perusahaan: response.data.data.nama_perusahaan || "",
                alamat_perusahaan: response.data.data.alamat_perusahaan || "",
                category: response.data.data.category || "",
                sub_category: response.data.data.sub_category || "",
                jumlah_produk: response.data.data.jumlah_produk || "",
                penawaran_forms: response.data.data.penawaran_forms || [],
                jumlah_TNC: response.data.data.jumlah_TNC || "",
                TNC: response.data.data.TNC || [],
            };
            setEditDataOL(updatedLetterData);
        } catch (error) {
            console.error('Kesalahan mengambil data:', error);
        }
    }
    useEffect(() => {
        getData(id)
    }, [id])

    function editLetter() {
        dispatch(AsyncEditLetter(id, editDataOL))
    }

    function revisiLetter() {
        dispatch(AsyncRevisiLetter(id, cleanedRevisi))
    }

    function handleApprove() {
        dispatch(AsyncApproveLetter(id))
    }
    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    {Object.keys(editDataOL).length !== 0 ? (
                        <OfferingLetter data={editDataOL} />
                    ) : <p>loading...</p>}
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>EDIT LETTER</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        {Object.keys(editDataOL).length !== 0 ? (
                            <OfferingInputLetter
                                letterData={editDataOL}
                                setLetterData={setDataOL}
                                editLetter={editLetter}
                            />
                        ) : <p>loading...</p>}
                    </div>
                </div>
                <div style={{ width: "26%" }}>
                    {
                        !showRevisiForm && revisi && revisi.length > 0 && (
                            <React.Fragment>
                                <div className={Style.title}>
                                    <h4>LIST REVISI</h4>
                                </div>
                                <div className={Style.card_list_revisi}>
                                    {
                                        revisi?.map((data, index) => (
                                            <ul>
                                                <li key={index}>{data}</li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }
                    {
                        (dataOL.status === "submitted" && showRevisiForm === false) && (
                            <Button type="button" className={`text-bg-danger ${Style.btnApprove}`}
                                onClick={() => setShowRevisiForm(!showRevisiForm)}
                            >
                                Need Revision
                            </Button>
                        )
                    }
                    {
                        showRevisiForm && (
                            <React.Fragment>
                                <div className={Style.inputRevisi}>
                                    <OfferingInputRevisi
                                        inputRevisi={revisi}
                                        setInputRevisi={setRevisi}
                                        revisiLetter={revisiLetter}
                                    />
                                </div>
                            </React.Fragment>
                        )
                    }
                    {
                        dataOL.status === "approved" && (
                            <Button type="button" className={`text-bg-danger ${Style.btnApprove}`}>
                                Print
                            </Button>
                        )
                    }
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="button"
                    className={`text-bg-success ${Style.btnApprove}`}
                    onClick={() => handleApprove()}
                >
                    Approve
                </Button>
            </div>
        </div>
    )
}

export default EditOfferingLetter