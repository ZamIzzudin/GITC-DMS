import React from 'react'
import { useState } from 'react';

import OfferingLetter from '../../../../components/letter/offering-letter/letter_template/OfferingLetter'
import OfferingInputLetter from '../../../../components/letter/offering-letter/input_letter/InputLetter'

import Style from './createOfferingLetter.module.css'

const CreateConfirmationLetter = () => {

    const [letterData, setLetterData] = useState({
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
        jumlah_penawaran: 1,
        penawaran_forms: [
            {
                jenis_penawaran: '',
                durasi: '',
                biaya: '',
            }
        ],
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
                    <OfferingLetter
                        data={letterData}
                    />
                </div>
                <div style={{ width: "30%" }}>
                    <div className={Style.title}>
                        <h4>Create Offering Letter</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        <OfferingInputLetter
                            letterData={letterData}
                            setLetterData={setLetterData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateConfirmationLetter
// informasi Letter
// const [letterInfo, setLetterInfo] = useState({
//     nomorSurat: '',
//     namaPenerbit: '',
//     tanggalSurat: '',
//     perihal: '',
//     mediaRef: '',
//     tanggalRef: '',
//     jenisPermohonan: '',
//     catatan: '',
// });

// //informasi Customer
// const [customerInfo, setCustomerInfo] = useState({
//     namaTertuju: '',
//     jabatan: '',
//     namaPerusahaan: '',
//     alamatPerusahaan: '',
// });

// // informasi produk
// const [productInfo, setProductInfo] = useState({
//     category: '',
//     subCategory: '',
// });

// //informasi Penawaran
// const [infoPenawaran, setInfoPenawaran] = useState({
//     jumlahPenawaran: 1,
//     PenawaranForms: [
//         {
//             jenisPenawaran: '',
//             durasi: '',
//             biaya: ''
//         }
//     ]
// });

// //term n condition
// const [infoTNC, setInfoTNC] = useState({
//     jumlahTNC: 1,
//     TNC: [
//         {
//             detail: ''
//         }
//     ]
// });