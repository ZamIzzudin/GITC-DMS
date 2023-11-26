import React from 'react'
import { useState } from 'react';

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"

import { isiCL } from '../../../../utils/DummyData';

const ViewConfirmationLetter = () => {

    const updatedProdukForms = isiCL.produk_forms.map(data => ({
        jenisKegiatan: data.jenis_kegiatan,
        tanggalKegiatan: data.tanggal_kegiatan,
        jumlahPeserta: data.jumlah_peserta,
        biayaMeal: data.biaya_meal,
        kursUSD: data.kurs_USD,
        biaya: data.biaya,
        totalBiayaMeals: data.total_biaya_meals,
        totalBiayaKegiatan: data.total_biaya_kegiatan,
        durasi: data.durasi
    }));

    const [templateOption] = useState("Produk + Meals")
    // const [templateOption] = useState(isiCL.template_option)

    const [letterInfo] = useState({
        nomorSurat: isiCL.nomor_surat,
        namaPenerbit: isiCL.nama_penerbit,
        tanggalSurat: isiCL.tanggal_surat,
        perihal: isiCL.perihal,
        mediaRef: isiCL.media_ref,
        tanggalRef: isiCL.tanggal_ref,
        jenisPermohonan: isiCL.jenis_permohonan,
        catatan: isiCL.catatan,
    });

    //informasi Customer
    const [customerInfo] = useState({
        namaTertuju: isiCL.nama_tertuju,
        jabatan: isiCL.jabatan,
        namaPerusahaan: isiCL.nama_perusahaan,
        alamatPerusahaan: isiCL.alamat_perusahaan,
    });

    // informasi produk
    const [productInfo] = useState({
        category: isiCL.category,
        subCategory: isiCL.sub_category,
    });

    //informasi kegiatan
    const [infoKegiatan] = useState({
        jumlahProduk: isiCL.jumlah_produk,
        produkForms: updatedProdukForms,
        totalBiaya: 0
    });

    //term n condition
    const [infoTNC] = useState({
        jumlahTNC: 1,
        TNC: [
            {
                detail: ''
            }
        ]
    });
    const [totalBiayaMealsPerKegiatan, seTotalBiayaMealsPerKegiatan] = useState([]);

    console.log(infoKegiatan.produkForms)

    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div>
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
        </div>
    )
}

export default ViewConfirmationLetter