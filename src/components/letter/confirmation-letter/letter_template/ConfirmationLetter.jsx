import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { getYear } from '../../../tools/FormatDate'
import { formatCurrency } from '../../../tools/FormatCurrency'

import Logo from "../../../../assets/picture/Logo Garuda.svg"
import Terbilang from "../../../tools/Terbilang"

import Style from "./confirmationLetter.module.css"

// Catatan : belum <p>GARUDA/JKTVZE/20359/2023</p>

const ConfirmationLetter = ({ templateOption, letterInfo, customerInfo, productInfo, infoKegiatan, infoTNC, totalBiayaMealsPerKegiatan, seTotalBiayaMealsPerKegiatan }) => {
    const { nomorSurat, namaPenerbit, tanggalSurat, perihal, mediaRef, tanggalRef, jenisPermohonan, catatan } = letterInfo;
    const { namaTertuju, jabatan, namaPerusahaan, alamatPerusahaan } = customerInfo;
    const { category, subCategory } = productInfo;
    const { jumlahProduk, produkForms: [], totalBiaya } = infoKegiatan;
    const { jumlahTNC, TNC: [] } = infoTNC;

    const banyakKegiatan = infoKegiatan.produkForms.length;
    const totalKegiatan = 3500000;
    const terbilang = Terbilang(totalKegiatan)

    // console.log(infoKegiatan.totalBiaya)
    const renderTotalBiaya = () => (
        <React.Fragment>
            <tr>
                <td >{banyakKegiatan + 1}.</td>
                <td >Total Biaya</td>
                <td >:</td>
                <td >
                    {infoKegiatan.totalBiaya} ({terbilang} rupiah)
                </td>
            </tr>
        </React.Fragment>
    )
    const renderPembayaran = () => (
        <React.Fragment>
            <tr>
                <td style={{ padding: "10px 0" }}>{banyakKegiatan + 2}.</td>
                <td style={{ padding: "10px 0" }}>Pembayaran</td>
                <td style={{ padding: "10px 5px " }}>:</td>
                <td style={{ padding: "10px 0" }} className={Style.pembayaran}>
                    Dilakukan sebesar 100% dengan cara transfer kepada:
                    <p>Nama Bank : PT.Bank Rakyat Indonesia (Persero), Tbk</p>
                    <p>Alamat <span style={{ marginLeft: "30px" }}>:</span> Jalan Tanah Abang IV, Jakarta</p>
                    <p>No. Rek. <span style={{ marginLeft: "21px" }}>:</span> IDR 0018.01.002013.30.1</p>
                    <p>Atas Nama<span style={{ marginLeft: "9px" }}>:</span> PT Garuda Indonesia (Persero) Tbk</p>
                </td>
            </tr>
        </React.Fragment>
    )

    const renderLokasi = () => (
        <React.Fragment>
            <tr>
                <td>{banyakKegiatan + 3}.</td>
                <td>Lokasi</td>
                <td>:</td>
                <td style={{ paddingBottom: "10px" }}>
                    <p>Garuda Indonesia Training Center</p>
                    <p>Jl. Duri Kosambi Raya No. 125</p>
                    <p>Jakarta 11750 - Indonesia</p>
                </td>
            </tr>
        </React.Fragment>
    )
    const renderCancellationFee = () => (
        <React.Fragment>
            <tr>
                <td>{banyakKegiatan + 4}.</td>
                <td>Cancellation Fee</td>
                <td>:</td>
                <td>
                    <p>Pembatalan 1 (satu) hari kerja sebelum pelaksanaan training akan dikenakan charge 100%</p>
                    <p>Pembatalan 2 (dua) sampai 3 (tiga) hari kerja sebelum pelaksanaan training akan dikenakan charge 50%</p>
                </td>
            </tr>
        </React.Fragment>
    )
    const renderPenutup = () => (
        <React.Fragment>
            <div style={{ margin: "1rem 0" }}>
                <p style={{ marginBottom: "1rem" }}>Surat Konfirmasi ini merupakan satu kesatuan yang tidak terpisahkan dengan syarat dan ketentuan umum yang berlaku di Garuda Indonesia Training Center. Surat Konfirmasi ini dapat juga digunakan sebagai INVOICE / penagihan training.</p>
                <p>Mohon Surat Konfirmasi ini ditanda tangani dan dikirim kembali kepada kami. <br />
                    Terima Kasih.</p>
            </div>
        </React.Fragment>
    )

    const renderTandaTangan = () => (
        <React.Fragment>
            <div className={Style.signWrapper}>
                <div style={{ marginBottom: "3rem", maxWidth: "45%" }}>
                    <p>Hormat Kami,</p>
                    <div className={Style.sign}>
                        <p>PT GARUDA INDONESIA (PERSERO) Tbk</p>
                        <p>LEARNING & DEVELOPMENT</p>
                        <p>SM Excess Capacity Management</p>
                        <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                        <p>{namaPenerbit.toUpperCase()}</p>
                    </div>
                </div>
                <div style={{ marginBottom: "3rem", maxWidth: "40%" }}>
                    <p>Menyetujui,</p>
                    <div className={Style.sign}>
                        <p>PT CITILINK INDONESIA</p>
                        <p style={{ height: "32px" }}>LEARNING & DEVELOPMENT </p>
                        <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                        <p>{namaTertuju.split(' ').slice(1).join(' ').toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

    const renderTotalBiayaUntilSign = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderTotalBiaya()}
                    {renderPembayaran()}
                    {renderLokasi()}
                    {renderCancellationFee()}
                </tbody>
            </table>
            {renderPenutup()}
            {renderTandaTangan()}
        </React.Fragment>
    );
    const renderTotalBiayaUntilPenutup = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderTotalBiaya()}
                    {renderPembayaran()}
                    {renderLokasi()}
                    {renderCancellationFee()}
                </tbody>
            </table>
            {renderPenutup()}
        </React.Fragment>
    )
    const renderTotalBiayaUntilCancelled = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderTotalBiaya()}
                    {renderPembayaran()}
                    {renderLokasi()}
                    {renderCancellationFee()}
                </tbody>
            </table>
        </React.Fragment>
    );
    const renderTotalBiayaUntilLokasi = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderTotalBiaya()}
                    {renderPembayaran()}
                    {renderLokasi()}
                </tbody>
            </table>
        </React.Fragment>
    );

    //dari bawah

    const renderPenutupUntilSign = () => (
        <React.Fragment>
            {renderPenutup()}
            {renderTandaTangan()}
        </React.Fragment>
    );

    const renderCancellationUntilSign = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderCancellationFee()}
                </tbody>
            </table>
            {renderPenutup()}
            {renderTandaTangan()}
        </React.Fragment>
    )

    const renderLokasiUntilSign = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderLokasi()}
                    {renderCancellationFee()}
                </tbody>
            </table>
            {renderPenutup()}
            {renderTandaTangan()}
        </React.Fragment>
    )

    const renderPembayaranUntilSign = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderPembayaran()}
                    {renderLokasi()}
                    {renderCancellationFee()}
                </tbody>
            </table>
            {renderPenutup()}
            {renderTandaTangan()}
        </React.Fragment>
    );

    //else
    const renderTotalBiayaUntilPembayaran = () => (
        <React.Fragment>
            <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                <tbody>
                    {renderTotalBiaya()}
                    {renderPembayaran()}
                </tbody>
            </table>
        </React.Fragment>
    )

    const renderTemplateKegiatan = (data, index) => {
        return (
            <React.Fragment key={index}>
                <tr>
                    <td style={{ padding: "10px 0 0 0" }} >{index}.</td>
                    <td style={{ padding: "10px 0 0 0" }} >Jenis Pelatihan</td>
                    <td style={{ padding: "10px 5px 0px 5px" }}>:</td>
                    <td style={{ fontWeight: "bold", padding: "10px 0 0 0 ", verticalAlign: "bottom" }}>{data.jenisKegiatan}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Periode</td>
                    <td>:</td>
                    <td>{data.tanggalKegiatan}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Jumlah Peserta</td>
                    <td>:</td>
                    <td>{data.jumlahPeserta} Peserta</td>
                </tr>
                {templateOption === "Produk saja" ? (
                    <tr>
                        <td></td>
                        <td>Biaya Kegiatan</td>
                        <td>:</td>
                        <td>USD {data.biaya} x {data.durasi} x {formatCurrency(data.kursUSD)} x {data.jumlahPeserta} Peserta ={formatCurrency(data.totalBiayaKegiatan)} </td>
                    </tr>
                ) : (
                    <React.Fragment>
                        <tr>
                            <td></td>
                            <td>Biaya Meals</td>
                            <td>:</td>
                            <td>USD {data.biayaMeal} x {formatCurrency(data.kursUSD)} x {data.jumlahPeserta} Peserta = {formatCurrency(data.totalBiayaMeals)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Biaya Kegiatan</td>
                            <td>:</td>
                            <td>USD {data.biaya} x {data.durasi} x {formatCurrency(data.kursUSD)} x {data.jumlahPeserta} Peserta = {formatCurrency(data.totalBiayaKegiatan)}</td>
                        </tr>
                        {templateOption === "Produk - Meals" && (
                            <tr>
                                <td></td>
                                <td>Total Biaya Kegiatan</td>
                                <td>:</td>
                                <td>Rp {data.biaya - data.biayaMeal} = Rp {data.biaya - data.biayaMeal} ({terbilang} rupiah)</td>
                            </tr>
                        )}
                        {templateOption === "Produk + Meals" && (
                            <tr>
                                <td></td>
                                <td>Total Biaya Kegiatan</td>
                                <td>:</td>
                                <td>{formatCurrency(data.biaya + data.biayaMeal)} = Rp {data.biaya + data.biayaMeal} ({terbilang} rupiah)</td>
                            </tr>
                        )}
                    </React.Fragment>
                )}
            </React.Fragment>)
    }

    return (
        <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "30px 0", gap: "50px" }}>
            {/* Page 1 */}
            <div className={Style.letter}>
                <div className={Style.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={Style.column}>
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
                            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>Surat Konfirmasi {subCategory}</p>
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <p style={{ marginBottom: "16px" }}>Dengan hormat,</p>
                            <p style={{ marginBottom: "16px" }}>Merujak {mediaRef} yang disampaikan per tanggal {tanggalRef} perihal {perihal}, dengan ini kami menyampaikan bahwa kami dapat melaksanakan permohonan dimaksud.</p>

                            <p >Adapun ketentuan dan syarat-syarat produk {subCategory}, akan disampaikan dalam Surat Konfirmasi sebagaimana terlampir.</p>
                        </div>
                        {/* Catatan */}
                        <div style={{ marginBottom: "2rem" }}>

                            {
                                catatan !== null && catatan !== "" && catatan !== undefined && (
                                    <p style={{ fontWeight: "bold" }}>
                                        Catatan: {catatan}.
                                    </p>
                                )
                            }
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Hormat Kami,</p>
                            <div className={Style.sign}>
                                <p>PT GARUDA INDONESIA (PERSERO) Tbk</p>
                                <p>LEARNING & DEVELOPMENT</p>
                                <p>SM Excess Capacity Management</p>
                                <div className={Style.tandaTangan} style={{ height: "100px" }}></div>
                                <p>{namaPenerbit.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page 2 */}
            <div className={Style.letter}>
                <div className={Style.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={Style.column}>
                    <div className={Style.colSatu}></div>
                    <div className={Style.colDua}>
                        <div style={{ marginBottom: "2rem", borderBottom: "1px solid #000", paddingBottom: "10px", width: "fit-content" }}>
                            <table style={{ width: "100%", marginTop: "1rem" }}>
                                <tbody>
                                    <tr>
                                        <td>Lampiran Surat Nomor</td>
                                        <td style={{ padding: "0 10px" }}>:</td>
                                        <td>GARUDA/JKTVZE/20049/{getYear(tanggalSurat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal</td>
                                        <td style={{ padding: "0 10px" }}>:</td>
                                        <td>{tanggalSurat}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* Kegiatan page 2 muat max 5*/}
                        <div style={{ marginBottom: "2rem" }}>
                            <p style={{ textDecoration: "underline", textAlign: "center", fontWeight: "bold" }}>SURAT KONFIRMASI</p>
                            <table className={Style.tableKegiatan} style={{ width: "100%", margin: "1rem 0" }}>
                                <tbody>
                                    {/* Kegiatan */}
                                    {
                                        infoKegiatan.produkForms.slice(0,
                                            (templateOption === "Produk saja" ? 8 : 5)).map((data, index) => (
                                                renderTemplateKegiatan(data, index + 1)
                                            ))
                                    }
                                </tbody>
                            </table>
                            {templateOption === "Produk saja" && (
                                <React.Fragment>
                                    {(infoKegiatan.produkForms.length === 1 || infoKegiatan.produkForms.length === 2) && (
                                        renderTotalBiayaUntilSign()
                                    )}
                                    {infoKegiatan.produkForms.length === 3 && (
                                        renderTotalBiayaUntilPenutup()
                                    )}
                                    {(infoKegiatan.produkForms.length === 4 || infoKegiatan.produkForms.length === 5) && (
                                        renderTotalBiayaUntilCancelled()
                                    )}
                                    {infoKegiatan.produkForms.length === 6 && (
                                        renderTotalBiayaUntilLokasi()
                                    )}
                                    {infoKegiatan.produkForms.length === 7 && (
                                        renderTotalBiayaUntilPembayaran()
                                    )}
                                    {infoKegiatan.produkForms.length === 8 && (
                                        <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                                            <tbody>
                                                {renderTotalBiaya()}
                                            </tbody>
                                        </table>
                                    )}
                                </React.Fragment>
                            )}

                            {(templateOption === "Produk + Meals" || templateOption === "Produk - Meals") && (
                                <React.Fragment>
                                    {infoKegiatan.produkForms.length === 1 && (
                                        renderTotalBiayaUntilSign()
                                    )}
                                    {infoKegiatan.produkForms.length === 2 && (
                                        renderTotalBiayaUntilPenutup()
                                    )}
                                    {infoKegiatan.produkForms.length === 3 && (
                                        renderTotalBiayaUntilCancelled()
                                    )}
                                    {infoKegiatan.produkForms.length === 4 && (
                                        renderTotalBiayaUntilPembayaran()
                                    )}
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Page 3 */}
            {
                (
                    (templateOption === "Produk saja" && infoKegiatan.produkForms.length > 2) ||
                    (infoKegiatan.produkForms.length > 1 && templateOption === "Produk + Meals" || templateOption === "Produk - Meals"))
                && (
                    <div className={Style.letter}>
                        <div className={Style.logo}>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={Style.column}>
                            <div className={Style.colSatu}></div>
                            <div className={Style.colDua}>
                                <div style={{ marginBottom: "2rem" }}>
                                    <table className={Style.tableKegiatan} style={{ width: "100%", margin: "1rem 0" }}>
                                        <tbody>
                                            {/* Kegiatan */}
                                            {
                                                infoKegiatan.produkForms.slice((templateOption === "Produk saja" ? 8 : 5), 10).map((data, index) => (
                                                    renderTemplateKegiatan(data, index + 6)
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                    {templateOption === "Produk saja" && (
                                        <React.Fragment>
                                            {infoKegiatan.produkForms.length === 3 && (
                                                renderTandaTangan()
                                            )}
                                            {(infoKegiatan.produkForms.length === 4 || infoKegiatan.produkForms.length === 5) && (
                                                renderPenutupUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 6 && (
                                                renderCancellationUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 7 && (
                                                renderLokasiUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 8 && (
                                                renderPembayaranUntilSign()
                                            )}
                                            {(infoKegiatan.produkForms.length === 9 || infoKegiatan.produkForms.length === 10) && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                        </React.Fragment>
                                    )}

                                    {(templateOption === "Produk + Meals" || templateOption === "Produk - Meals") && (
                                        <React.Fragment>
                                            {infoKegiatan.produkForms.length === 2 && (
                                                renderTandaTangan()
                                            )}
                                            {infoKegiatan.produkForms.length === 3 && (
                                                renderPenutupUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 4 && (
                                                renderLokasiUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 5 && (
                                                renderPembayaranUntilSign()
                                            )}
                                            {(infoKegiatan.produkForms.length === 6) && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 7 && (
                                                renderTotalBiayaUntilPenutup()
                                            )}
                                            {infoKegiatan.produkForms.length === 8 && (
                                                renderTotalBiayaUntilCancelled()
                                            )}
                                            {infoKegiatan.produkForms.length === 9 && (
                                                renderTotalBiayaUntilPembayaran()
                                            )}
                                        </React.Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Page 4 */}
            {
                (infoKegiatan.produkForms.length >= 8 && templateOption === "Produk + Meals" || templateOption === "Produk - Meals") && (
                    <div className={Style.letter}>
                        <div className={Style.logo}>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={Style.column}>
                            <div className={Style.colSatu}></div>
                            <div className={Style.colDua}>
                                <div style={{ marginBottom: "2rem" }}>
                                    {(templateOption === "Produk + Meals" || templateOption === "Produk - Meals") && (
                                        <React.Fragment>
                                            {infoKegiatan.produkForms.length === 8 && (
                                                renderPenutupUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 9 && (
                                                renderLokasiUntilSign()
                                            )}
                                            {infoKegiatan.produkForms.length === 10 && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                        </React.Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ConfirmationLetter


{/* <React.Fragment>
<table className={Style.tableKegiatan} style={{ width: "100%" }}>
    <tbody>
        <tr>
            <td style={{ padding: "10px 0" }}>{banyakKegiatan + 1}.</td>
            <td style={{ padding: "10px 0" }}>Total Biaya</td>
            <td style={{ padding: "10px 5px" }}>:</td>
            <td style={{ padding: "10px 0" }}>
                Rp {infoKegiatan.produkForms.reduce((total, data) => total + data.biaya + data.biayaMeal, 0)} = Rp {infoKegiatan.produkForms.reduce((total, data) => total + data.biaya + data.biayaMeal, 0)} ({terbilang} rupiah)
            </td>
        </tr>

        <tr>
            <td>{banyakKegiatan + 2}.</td>
            <td style={{ paddingBottom: "10px" }}>Pembayaran</td>
            <td>:</td>
            <td style={{ paddingBottom: "10px" }} className={Style.pembayaran}>
                Dilakukan sebesar 100% dengan cara transfer kepada:
                <p>Nama Bank : PT.Bank Rakyat Indonesia (Persero), Tbk</p>
                <p>Alamat <span style={{ marginLeft: "30px" }}>:</span> Jalan Tanah Abang IV, Jakarta</p>
                <p>No. Rek. <span style={{ marginLeft: "21px" }}>:</span> IDR 0018.01.002013.30.1</p>
                <p>Atas Nama<span style={{ marginLeft: "9px" }}>:</span> PT Garuda Indonesia (Persero) Tbk</p>
            </td>
        </tr>
        <tr>
            <td>{banyakKegiatan + 3}.</td>
            <td>Lokasi</td>
            <td>:</td>
            <td style={{ paddingBottom: "10px" }}>
                <p>Garuda Indonesia Training Center</p>
                <p>Jl. Duri Kosambi Raya No. 125</p>
                <p>Jakarta 11750 - Indonesia</p>
            </td>
        </tr>

        <tr>
            <td>{banyakKegiatan + 4}.</td>
            <td>Cancellation Fee</td>
            <td>:</td>
            <td>
                <p>Pembatalan 1 (satu) hari kerja sebelum pelaksanaan training akan dikenakan charge 100%</p>
                <p>Pembatalan 2 (dua) sampai 3 (tiga) hari kerja sebelum pelaksanaan training akan dikenakan charge 50%</p>
            </td>
        </tr>
    </tbody>
</table>
<div>
    <p style={{ marginBottom: "1rem" }}>Surat Konfirmasi ini merupakan satu kesatuan yang tidak terpisahkan dengan syarat dan ketentuan umum yang berlaku di Garuda Indonesia Training Center. Surat Konfirmasi ini dapat juga digunakan sebagai INVOICE / penagihan training.</p>
    <p>Mohon Surat Konfirmasi ini ditanda tangani dan dikirim kembali kepada kami. <br />
        Terima Kasih.</p>
</div>
</React.Fragment> */}