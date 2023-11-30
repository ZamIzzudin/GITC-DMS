import React from 'react'
import { useState } from 'react';

import ConfirmationLetter from '../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter';
import ConfirmationInputLetter from '../../../../components/letter/confirmation-letter/input_letter/InputLetter'

import Style from '../../create_letter/create_confirmationLetter/createConfirmationLetter.module.css'

const UploadConfirmationLetter = () => {
    const [letterData, setLetterData] = useState({
        template_option: "Produk saja",
        nomor_surat: "",
        nama_penerbit: "",
        tanggal_surat: "",
        perihal: "",
        media_ref: "",
        tanggal_ref: "",
        jenis_permohonan: "",
        catatan: "",
        nama_tertuju: "",
        jabatan: "",
        nama_perusahaan: "",
        alamat_perusahaan: "",
        category: "",
        sub_category: "",
        jumlah_produk: 1,
        produk_forms: [
            {
                jenis_kegiatan: '',
                tanggal_kegiatan: '',
                jumlah_peserta: '',
                biaya_meal: '',
                kurs_USD: '',
                biaya: '',
                total_biaya_meals: '',
                total_biaya_kegiatan: '',
                durasi: '',
            }
        ],
        total_biaya: "",
        jumlah_TNC: 1,
        TNC: [
            {
                detail: ''
            }
        ]
    });
    return (
        <div className='container'>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    <ConfirmationLetter
                        data={letterData}
                    />
                </div>
                <div style={{ width: "30%" }}>
                    <div className={Style.title}>
                        <h4>Upload Confirmation Letter</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        <ConfirmationInputLetter
                            inputLetter={letterData}
                            setInputLetter={setLetterData}
                            isUpload
                        />
                    </div>
                </div>
            </div>
        </div>)
}

export default UploadConfirmationLetter