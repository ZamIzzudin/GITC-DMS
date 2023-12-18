import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../../utils/api'

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import { dataConfirmationLetter } from '../../../../utils/DummyData';

const ViewConfirmationLetter = () => {
    const { id } = useParams();
    const [dataCL, setDataCL] = useState({})
    const idd = 17
    const [data, setData] = useState(dataConfirmationLetter.find(item => item.id == idd))

    async function getData(id) {
        const response = await api.GetConfirmLetterById(id)
        setDataCL(response.data.data)
    }

    useEffect(() => {
        getData(id)
    }, [id])
    console.log(dataCL)


    return (
        <div style={{ paddingBottom: "50px" }}>
            <div className='label-wrapper'>
                <div className={`container label`}>
                    {/* <span>{data.nomor_surat ? data.nomor_surat : "unset"}</span> */}
                    <span>{dataCL.nomor_surat ? dataCL.nomor_surat : "unset"}</span>
                    <i className={`pi pi-download download`} style={{ fontSize: '1rem' }} />
                </div>
            </div>
            <div className='container'>
                {
                    Object.keys(dataCL).length !== 0 ? (
                        <ConfirmationLetter data={dataCL}
                        />
                    ) : null
                }
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