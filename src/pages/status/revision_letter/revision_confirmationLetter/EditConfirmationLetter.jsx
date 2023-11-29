import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import ConfirmationInputLetter from "../../../../components/letter/confirmation-letter/input_letter/InputLetter"
import ConfirmationInputRevisi from "../../../../components/letter/confirmation-letter/input_revisi/InputRevisi"

import { dataConfirmationLetter } from '../../../../utils/DummyData';

import Style from "./editLetter.module.css"

const EditConfirmationLetter = () => {
    const { id } = useParams();
    const [dataCL, setDataCL] = useState(dataConfirmationLetter.find(item => item.id === id))

    const [editDataCL, setEditDataCL] = useState({
        template_option: dataCL.template_option,
        nomor_surat: dataCL.nomor_surat,
        nama_penerbit: dataCL.nama_penerbit,
        tanggal_surat: dataCL.tanggal_surat,
        perihal: dataCL.perihal,
        media_ref: dataCL.media_ref,
        tanggal_ref: dataCL.tanggal_ref,
        jenis_permohonan: dataCL.jenis_permohonan,
        catatan: dataCL.catatan,
        nama_tertuju: dataCL.nama_tertuju,
        jabatan: dataCL.jabatan,
        nama_perusahaan: dataCL.nama_perusahaan,
        alamat_perusahaan: dataCL.alamat_perusahaan,
        category: dataCL.category,
        sub_category: dataCL.sub_category,
        jumlah_produk: dataCL.jumlah_produk,
        produk_forms: dataCL.produk_forms,
        total_biaya: dataCL.total_biaya,
        jumlah_TNC: dataCL.jumlah_TNC,
        TNC: dataCL.TNC
    });

    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    <ConfirmationLetter data={editDataCL} />
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>EDIT LETTER</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        <ConfirmationInputLetter
                            inputLetter={editDataCL}
                            setInputLetter={setEditDataCL}
                        />
                    </div>
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>INPUT REVISI</h4>
                    </div>
                    <div className={Style.inputRevisi}>
                        <ConfirmationInputRevisi />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="button" className={`text-bg-success ${Style.btnApprove}`}>
                    Approve
                </Button>
            </div>
        </div>
    )
}

export default EditConfirmationLetter