import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import { dataConfirmationLetter } from '../../../../utils/DummyData';

const ViewConfirmationLetter = () => {
    const { id } = useParams();
    // const [dataCL, setDataCL] = useState()
    const [dataCL, setDataCL] = useState(dataConfirmationLetter.find(item => item.id === id))

    // useEffect(() => {
    //     if (dataConfirmationLetter) {
    //         console.log(id)

    //         const foundData = dataConfirmationLetter.find(item => item.id === id);
    //         if (foundData) {
    //             setDataCL(foundData);
    //         }
    //     }
    // }, [id, dataConfirmationLetter]);

    console.log(dataCL)

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

    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div>
                {/* <ConfirmationLetter
                    templateOption={templateOption}
                    letterInfo={letterInfo}
                    customerInfo={customerInfo}
                    productInfo={productInfo}
                    infoKegiatan={infoKegiatan}
                    infoTNC={infoTNC}
                    totalBiayaMealsPerKegiatan={totalBiayaMealsPerKegiatan}
                    seTotalBiayaMealsPerKegiatan={seTotalBiayaMealsPerKegiatan}
                /> */}
                <ConfirmationLetter
                    data={dataCL}
                />
            </div>
        </div>
    )
}

export default ViewConfirmationLetter