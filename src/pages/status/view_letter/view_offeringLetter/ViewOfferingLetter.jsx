import { useState, useEffect } from 'react';
import OfferingLetter from "../../../../components/letter/offering-letter/letter_template/OfferingLetter"
import { useParams } from 'react-router-dom';
import api from '../../../../utils/api'

// import { isiOL, offeringLetterData } from "../../../../utils/DummyData";

const ViewOfferingLetter = () => {
    const { id } = useParams();
    const [dataOL, setDataOL] = useState({})

    async function getData(id) {
        const response = await api.GetDetailOfferingLetter(id)

        setDataOL(response.data.data)
    }
    useEffect(() => {
        getData(id)
    }, [id])

    return (
        <div className='' style={{ paddingBottom: "50px" }}>
            <div className='label-wrapper'>
                <div className={`container label`}>
                    <span>{dataOL.nomor_surat ? dataOL.nomor_surat : 'unset'}</span>
                    <i className={`pi pi-download download`} style={{ fontSize: '1rem' }} />
                </div>
            </div>
            <div className='container'>
                {Object.keys(dataOL).length !== 0 ? (
                    <OfferingLetter
                        data={dataOL}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default ViewOfferingLetter



// const updatedPenawaranForms = isiOL.penawaran_forms.map(data => ({
//     jenisPenawaran: data.jenis_penawaran,
//     biaya: data.biaya,
//     durasi: data.durasi
// }));

// const updateTNC = isiOL.TNC.map(data => ({
//     detail: data.detail
// }))

// const [letterInfo] = useState({
//     nomorSurat: isiOL.nomor_surat,
//     namaPenerbit: isiOL.nama_penerbit,
//     tanggalSurat: isiOL.tanggal_surat,
//     perihal: isiOL.perihal,
//     mediaRef: isiOL.media_ref,
//     tanggalRef: isiOL.tanggal_ref,
//     jenisPermohonan: isiOL.jenis_permohonan,
//     catatan: isiOL.catatan,
// });

// //informasi Customer
// const [customerInfo] = useState({
//     namaTertuju: isiOL.nama_tertuju,
//     jabatan: isiOL.jabatan,
//     namaPerusahaan: isiOL.nama_perusahaan,
//     alamatPerusahaan: isiOL.alamat_perusahaan,
// });

// // informasi produk
// const [productInfo] = useState({
//     category: isiOL.category,
//     subCategory: isiOL.sub_category,
// });

// //informasi Penawaran
// const [infoPenawaran] = useState({
//     jumlahPenawaran: isiOL.jumlah_produk,
//     PenawaranForms: updatedPenawaranForms,
// });

// //term n condition
// const [infoTNC] = useState({
//     jumlahTNC: 1,
//     TNC: updateTNC
// });