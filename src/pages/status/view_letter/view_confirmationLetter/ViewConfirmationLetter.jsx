import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../../utils/api'

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
// import { dataConfirmationLetter } from '../../../../utils/DummyData';

const ViewConfirmationLetter = () => {
    const { id } = useParams();
    const [dataCL, setDataCL] = useState({})

    // async function getData(id) {
    //     try {
    //         const response = await api.GetDetailConfirmLetter(id);
    //         setDataCL(response.data.data);
    //     } catch (error) {
    //         console.error('Kesalahan mengambil data:', error);
    //     }
    // }

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


    const [letterData, setLetterData] = useState({
        template_option: dataCL.option || dataCL.template_option || dataCL["template_option "] || "Produk saja",
        nomor_surat: dataCL.nomor_surat || "",
        nama_penerbit: dataCL.nama_penerbit || "",
        tanggal_surat: dataCL.tanggal_surat || "",
        perihal: dataCL.perihal || "",
        media_ref: dataCL.media_ref || "",
        tanggal_ref: dataCL.tanggal_ref || "",
        jenis_permohonan: dataCL.jenis_permohonan || "",
        catatan: dataCL.catatan || "",
        nama_tertuju: dataCL.nama_tertuju || "",
        jabatan: dataCL.jabatan || "",
        nama_perusahaan: dataCL.nama_perusahaan || "",
        alamat_perusahaan: dataCL.alamat_perusahaan || "",
        category: dataCL.category || "",
        sub_category: dataCL.sub_category || "",
        jumlah_produk: dataCL.jumlah_produk || "",
        kurs_USD: dataCL.kurs_USD || "",
        produk_forms: dataCL.produk_forms || [],
        total_biaya: dataCL.total_biaya || "",
        jumlah_TNC: dataCL.jumlah_TNC || "",
        TNC: dataCL.TNC || [],
        konversi_kursUSD: dataCL.konversi_kursUSD || "",
        nominal_terbilang: dataCL.nominal_terbilang || ""
    });

    console.log(dataCL)
    // console.log(dataCL.produk_forms.length)
    // console.log(letterData)

    return (
        <div style={{ paddingBottom: "50px" }}>
            <div className='label-wrapper'>
                <div className={`container label`}>
                    <span>{dataCL.nomor_surat ? dataCL.nomor_surat : 'unset'}</span>
                    <i className={`pi pi-download download`} style={{ fontSize: '1rem' }} />
                </div>
            </div>
            <div className='container'>
                {Object.keys(dataCL).length !== 0 ? (
                    <ConfirmationLetter
                        data={dataCL}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default ViewConfirmationLetter

// useEffect(() => {
//     if (dataConfirmationLetter) {
//         console.log(id)

//         const foundData = dataConfirmationLetter.find(item => item.id === id);
//         if (foundData) {
//             setDataCL(foundData);
//         }
//     }
// }, [id, dataConfirmationLetter]);

// const updatedProdukForms = dataCL.produk_forms.map(data => ({
//     jenisKegiatan: data.jenis_kegiatan,
//     tanggalKegiatan: data.tanggal_kegiatan,
//     jumlahPeserta: data.jumlah_peserta,
//     biayaMeal: data.biaya_meal,
//     kursUSD: data.kurs_USD,
//     biaya: data.biaya,
//     totalBiayaMeals: data.total_biaya_meals,
//     totalBiayaKegiatan: data.total_biaya_kegiatan,
//     durasi: data.durasi
// }));

// const [letterData] = useState({
//     templateOption: dataCL.template_option,
//     nomorSurat: dataCL.nomor_surat,
//     namaPenerbit: dataCL.nama_penerbit,
//     tanggalSurat: dataCL.tanggal_surat,
//     perihal: dataCL.perihal,
//     mediaRef: dataCL.media_ref,
//     tanggalRef: dataCL.tanggal_ref,
//     jenisPermohonan: dataCL.jenis_permohonan,
//     catatan: dataCL.catatan,
//     namaTertuju: dataCL.nama_tertuju,
//     jabatan: dataCL.jabatan,
//     namaPerusahaan: dataCL.nama_perusahaan,
//     alamatPerusahaan: dataCL.alamat_perusahaan,
//     category: dataCL.category,
//     subCategory: dataCL.sub_category,
//     jumlahProduk: dataCL.jumlah_produk,
//     produkForms: updatedProdukForms,
//     totalBiaya: dataCL.total_biaya,
//     jumlahTNC: 1,
//     TNC: [
//         {
//             detail: ''
//         }
//     ]
// });