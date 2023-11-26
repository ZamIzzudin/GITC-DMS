import React from 'react'
import { useState } from 'react';

import OfferingLetter from '../../../../components/letter/offering-letter/letter_template/OfferingLetter'
import OfferingInputLetter from '../../../../components/letter/offering-letter/input_letter/InputLetter'

import Style from './createOfferingLetter.module.css'

const CreateConfirmationLetter = () => {
    // informasi Letter
    const [letterInfo, setLetterInfo] = useState({
        nomorSurat: '',
        namaPenerbit: '',
        tanggalSurat: '',
        perihal: '',
        mediaRef: '',
        tanggalRef: '',
        jenisPermohonan: '',
        catatan: '',
    });

    //informasi Customer
    const [customerInfo, setCustomerInfo] = useState({
        namaTertuju: '',
        jabatan: '',
        namaPerusahaan: '',
        alamatPerusahaan: '',
    });

    // informasi produk
    const [productInfo, setProductInfo] = useState({
        category: '',
        subCategory: '',
    });

    //informasi kegiatan
    const [infoKegiatan, setInfoKegiatan] = useState({
        jumlahProduk: 1,
        produkForms: [
            {
                jenisKegiatan: '',
                tanggalKegiatan: '',
                jumlahPeserta: '',
                biayaMeal: '',
                kursUSD: '',
                biaya: '',
            }
        ],
        totalBiaya: ''

    });

    //term n condition
    const [infoTNC, setInfoTNC] = useState({
        jumlahTNC: 1,
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
                    <OfferingLetter />
                </div>
                <div style={{ width: "30%" }}>
                    <div className={Style.title}>
                        <h4>Create Offering Letter</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        <OfferingInputLetter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateConfirmationLetter