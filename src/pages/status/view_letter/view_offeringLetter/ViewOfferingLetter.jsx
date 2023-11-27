import React from 'react'
import { useState } from 'react';
import OfferingLetter from "../../../../components/letter/offering-letter/letter_template/OfferingLetter"

import { isiOL } from "../../../../utils/DummyData";

const ViewOfferingLetter = () => {

    console.log(isiOL)
    const updatedPenawaranForms = isiOL.penawaran_forms.map(data => ({
        jenisPenawaran: data.jenis_penawaran,
        biaya: data.biaya,
        durasi: data.durasi
    }));

    const updateTNC = isiOL.TNC.map(data => ({
        detail: data.detail
    }))

    const [letterInfo] = useState({
        nomorSurat: isiOL.nomor_surat,
        namaPenerbit: isiOL.nama_penerbit,
        tanggalSurat: isiOL.tanggal_surat,
        perihal: isiOL.perihal,
        mediaRef: isiOL.media_ref,
        tanggalRef: isiOL.tanggal_ref,
        jenisPermohonan: isiOL.jenis_permohonan,
        catatan: isiOL.catatan,
    });

    //informasi Customer
    const [customerInfo] = useState({
        namaTertuju: isiOL.nama_tertuju,
        jabatan: isiOL.jabatan,
        namaPerusahaan: isiOL.nama_perusahaan,
        alamatPerusahaan: isiOL.alamat_perusahaan,
    });

    // informasi produk
    const [productInfo] = useState({
        category: isiOL.category,
        subCategory: isiOL.sub_category,
    });

    //informasi Penawaran
    const [infoPenawaran] = useState({
        jumlahPenawaran: isiOL.jumlah_produk,
        PenawaranForms: updatedPenawaranForms,
    });

    //term n condition
    const [infoTNC] = useState({
        jumlahTNC: 1,
        TNC: updateTNC
    });
    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div>
                <OfferingLetter
                    letterInfo={letterInfo}
                    customerInfo={customerInfo}
                    productInfo={productInfo}
                    infoPenawaran={infoPenawaran}
                    infoTNC={infoTNC}
                />
            </div>
        </div>
    )
}

export default ViewOfferingLetter