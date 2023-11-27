import React from 'react'
import { useState } from 'react';

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import ConfirmationInputLetter from "../../../../components/letter/confirmation-letter/input_letter/InputLetter"

import Style from './createConfirmationLetter.module.css'

const CreateConfirmationLetter = () => {
    const [templateOption, setTemplateOption] = useState("Produk saja")

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
                totalBiayaKegiatan: "",
                totalBiayaMeals: "",
                durasi: '',
            }
        ],
        totalBiaya: 0
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
    const [totalBiayaMealsPerKegiatan, seTotalBiayaMealsPerKegiatan] = useState([]);


    return (

        <div className='container'>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    <ConfirmationLetter
                        templateOption={templateOption}
                        letterInfo={letterInfo}
                        customerInfo={customerInfo}
                        productInfo={productInfo}
                        infoKegiatan={infoKegiatan}
                        infoTNC={infoTNC}
                        totalBiayaMealsPerKegiatan={totalBiayaMealsPerKegiatan}
                        seTotalBiayaMealsPerKegiatan={seTotalBiayaMealsPerKegiatan}
                    />
                </div>
                <div style={{ width: "30%" }}>
                    <div className={Style.title}>
                        <h4>Create Confirmation Letter</h4>
                    </div>
                    <div className={Style.inputLetter}>

                        <ConfirmationInputLetter
                            templateOption={templateOption}
                            setTemplateOption={setTemplateOption}

                            letterInfo={letterInfo}
                            setLetterInfo={setLetterInfo}

                            customerInfo={customerInfo}
                            setCustomerInfo={setCustomerInfo}

                            productInfo={productInfo}
                            setProductInfo={setProductInfo}

                            infoKegiatan={infoKegiatan}
                            setInfoKegiatan={setInfoKegiatan}

                            infoTNC={infoTNC}
                            setInfoTNC={setInfoTNC}

                            totalBiayaMealsPerKegiatan={totalBiayaMealsPerKegiatan}
                            seTotalBiayaMealsPerKegiatan={seTotalBiayaMealsPerKegiatan}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateConfirmationLetter