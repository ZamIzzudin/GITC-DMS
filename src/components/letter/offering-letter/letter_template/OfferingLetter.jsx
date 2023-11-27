import React from 'react'
import { getYear } from '../../../tools/FormatDate'
import { formatCurrency } from '../../../tools/FormatCurrency'
import Logo from "../../../../assets/picture/Logo Garuda.svg"
import Style from "./offeringLetter.module.css"

const OfferingLetter = ({ letterInfo, customerInfo, productInfo, infoPenawaran, infoTNC }) => {

    const { nomorSurat, namaPenerbit, tanggalSurat, perihal, mediaRef, tanggalRef, jenisPermohonan, catatan } = letterInfo;
    const { namaTertuju, jabatan, namaPerusahaan, alamatPerusahaan } = customerInfo;
    const { category, subCategory } = productInfo;
    const { jumlahPenawaran, PenawaranForms: [] } = infoPenawaran;
    const { jumlahTNC, TNC: [] } = infoTNC;


    const renderPenutup = () => {
        return (<p style={{ marginBottom: "3rem" }}>Demikian disampaikan, perkenan konfirmasi lebih lanjut apabila setuju dengan surat penawaran ini. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.</p>)
    }

    const renderSign = () => {
        return (
            <div style={{ marginBottom: "3rem" }}>
                <p>Hormat Kami,</p>
                <div className={Style.sign}>
                    <p>PT GARUDA INDONESIA (PERSERO) Tbk</p>
                    <p>LEARNING & DEVELOPMENT</p>
                    <p>SM Excess Capacity Management</p>
                    <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                    <p>{namaPenerbit.toUpperCase()}</p>
                </div>
            </div>
        )
    }

    const renderPenutupToSign = () => {
        return (
            <React.Fragment>
                {renderPenutup()}
                {renderSign()}
            </React.Fragment>
        )
    }

    return (
        <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "30px 0" }}>
            {/* page 1 */}
            <div className={Style.letter}>
                <div className={Style.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={Style.column}>
                    {/* informasi perusahan Garuda */}
                    <div className={Style.colSatu}>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "175px", gap: "7px", marginBottom: "30px" }}>
                            <p style={{ fontWeight: "bold" }}>Kota/City</p>
                            <p>Nomor Kami/Our Number</p>
                            <p>Perihal/Subject</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p style={{ marginBottom: "14px" }}>PT Garuda Indonesia (Persero) Tbk</p>
                            <p>Kantor Pusat / Registred Office <br />
                                Jalan Kebon Sirih No. 46A <br />
                                Jakarta 10110 <br />
                                Indonesia
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p>Kantor Management/Management Office</p>
                            <p>Management Building, Garuda City <br />
                                Soekarno-Hatta International Airport <br />
                                P.O BOX 1104 TNG BUSH
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <table >
                                <tbody>
                                    <tr style={{ marginBottom: "10px" }}>
                                        <td>Phone</td>
                                        <td>: +62 21-25601090</td>
                                    </tr>
                                    <tr>
                                        <td>Fax</td>
                                        <td>: +62 21-55915673</td>
                                    </tr>
                                    <tr>
                                        <td>SITA Code</td>
                                        <td>: JKTDS</td>
                                    </tr>
                                    <tr>
                                        <td>Website</td>
                                        <td>: garuda.indonesia.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={Style.colDua}>

                        {/* informasi Customer */}
                        <div style={{ marginBottom: "4rem", maxWidth: "200px" }}>
                            <p>Kepada</p>
                            <p>Yth. {namaTertuju}</p>
                            <p>{jabatan}</p>
                            <p>{namaPerusahaan}</p>
                            <p>{alamatPerusahaan}</p>
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Jakarta, {tanggalSurat}</p>
                            <p>GARUDA/JKTVZE/20359/{getYear(tanggalSurat)}</p>
                            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>Surat Penawaran</p>
                        </div>
                        {/* Penawaran produk */}
                        <div>
                            <p style={{ marginBottom: "16px" }}>Dengan hormat,</p>
                            <p>Menindaklanjuti {mediaRef} tanggal {tanggalRef} perihal {perihal}, bersama ini disampaikan penawaran harga edutrip sebagai berikut :</p>

                            <table key="tablePenawaran" className={Style.tablePenawaran} style={{ width: "100%", marginTop: "1rem" }}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Detail</th>
                                        <th>Durasi</th>
                                        <th>Biaya / Peserta</th>
                                    </tr>
                                </thead>
                                {
                                    infoPenawaran.PenawaranForms.map((data, index) => (
                                        <React.Fragment>
                                            <tbody>
                                                <tr>
                                                    <td>{index + 1}.</td>
                                                    <td style={{ textAlign: "left" }}>{data.jenisPenawaran}</td>
                                                    <td>{data.durasi}*</td>
                                                    <td>{formatCurrency(data.biaya)}</td>
                                                </tr>
                                            </tbody>
                                        </React.Fragment>
                                    ))
                                }

                            </table>

                            {/* Term n Condition */}
                            <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                                {
                                    infoTNC.TNC.map(data => (
                                        <p style={{ fontSize: "12px" }}>*{data.detail}</p>
                                    ))
                                }
                            </div>
                            {infoPenawaran.PenawaranForms.length <= 4 &&
                                (renderPenutupToSign())}
                            {((infoPenawaran.PenawaranForms.length >= 5 &&
                                infoPenawaran.PenawaranForms.length <= 8)) &&
                                (renderPenutup())}
                        </div>
                    </div>
                </div>
            </div>
            {/* page 2 */}
            {infoPenawaran.PenawaranForms.length >= 5 &&
                (
                    <div className={Style.letter}>
                        <div className={Style.logo}>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={Style.column}>
                            {/* informasi perusahan Garuda */}
                            <div className={Style.colSatu} style={{ width: "128.29px" }}>
                                <div style={{ display: "flex", flexDirection: "column", marginTop: "175px", gap: "7px", marginBottom: "30px" }}>
                                    <p style={{ fontWeight: "bold" }}>Kota/City</p>
                                    <p>Nomor Kami/Our Number</p>
                                    <p>Perihal/Subject</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <p style={{ marginBottom: "14px" }}>PT Garuda Indonesia (Persero) Tbk</p>
                                    <p>Kantor Pusat / Registred Office <br />
                                        Jalan Kebon Sirih No. 46A <br />
                                        Jakarta 10110 <br />
                                        Indonesia
                                    </p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <p>Kantor Management/Management Office</p>
                                    <p>Management Building, Garuda City <br />
                                        Soekarno-Hatta International Airport <br />
                                        P.O BOX 1104 TNG BUSH
                                    </p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <table >
                                        <tbody>
                                            <tr style={{ marginBottom: "10px" }}>
                                                <td>Phone</td>
                                                <td>: +62 21-25601090</td>
                                            </tr>
                                            <tr>
                                                <td>Fax</td>
                                                <td>: +62 21-55915673</td>
                                            </tr>
                                            <tr>
                                                <td>SITA Code</td>
                                                <td>: JKTDS</td>
                                            </tr>
                                            <tr>
                                                <td>Website</td>
                                                <td>: garuda.indonesia.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={Style.colDua}>
                                {((infoPenawaran.PenawaranForms.length >= 5 &&
                                    infoPenawaran.PenawaranForms.length <= 8)) &&
                                    (renderSign())}
                                {(infoPenawaran.PenawaranForms.length >= 9) &&
                                    (renderPenutupToSign())}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default OfferingLetter