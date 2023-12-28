import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { getYear } from '../../../tools/FormatDate'
import { formatCurrency } from '../../../tools/FormatCurrency'
import { formatDate } from '../../../tools/FormatDate'

import Logo from "../../../../assets/picture/Logo Garuda.svg"
import Style from "./confirmationLetter.module.css"

// Catatan : belum <p>GARUDA/JKTVZE/20359/2023</p>

const ConfirmationLetter = ({ data, pagesRef }) => {

    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);
    const page4Ref = useRef(null);

    // Set ref values to the array for passing them to the parent
    if (pagesRef) {
        pagesRef.current = [page1Ref, page2Ref, page3Ref, page4Ref];
    }

    const [letterData, setLetterData] = useState({
        template_option: data ? data.option || data.template_option || data["template_option "] || "Produk saja" : "",
        nomor_surat: data ? data.nomor_surat : "",
        nama_penerbit: data ? data.nama_penerbit : "",
        tanggal_surat: data ? data.tanggal_surat : "",
        perihal: data ? data.perihal : "",
        media_ref: data ? data.media_ref : "",
        tanggal_ref: data ? data.tanggal_ref : "",
        jenis_permohonan: data ? data.jenis_permohonan : "",
        catatan: data ? data.catatan : "",
        nama_tertuju: data ? data.nama_tertuju : "",
        jabatan: data ? data.jabatan : "",
        nama_perusahaan: data ? data.nama_perusahaan : "",
        alamat_perusahaan: data ? data.alamat_perusahaan : "",
        category: data ? data.category : "",
        sub_category: data ? data.sub_category : "",
        jumlah_produk: data ? data.jumlah_produk : "",
        kurs_USD: data ? data.kurs_USD : "",
        produk_forms: data ? data.produk_forms : [],
        total_biaya: data ? data.total_biaya : "",
        jumlah_TNC: data ? data.jumlah_TNC : "",
        TNC: data ? data.TNC : [],
        konversi_kursUSD: data ? data.konversi_kursUSD : "",
        nominal_terbilang: data ? data.nominal_terbilang : ""
    });

    useEffect(() => {
        setLetterData(prevLetterData => ({
            ...prevLetterData,
            template_option: data ? data.option || data.template_option || data["template_option "] || "Produk saja" : "",
            nomor_surat: data ? data.nomor_surat : "",
            nama_penerbit: data ? data.nama_penerbit : "",
            tanggal_surat: data ? data.tanggal_surat : "",
            perihal: data ? data.perihal : "",
            media_ref: data ? data.media_ref : "",
            tanggal_ref: data ? data.tanggal_ref : "",
            jenis_permohonan: data ? data.jenis_permohonan : "",
            catatan: data ? data.catatan : "",
            nama_tertuju: data ? data.nama_tertuju : "",
            jabatan: data ? data.jabatan : "",
            nama_perusahaan: data ? data.nama_perusahaan : "",
            alamat_perusahaan: data ? data.alamat_perusahaan : "",
            category: data ? data.category : "",
            sub_category: data ? data.sub_category : "",
            jumlah_produk: data ? data.jumlah_produk : "",
            kurs_USD: data ? data.kurs_USD : "",
            produk_forms: data ? data.produk_forms : [],
            total_biaya: data ? data.total_biaya : "",
            jumlah_TNC: data ? data.jumlah_TNC : "",
            TNC: data ? data.TNC : [],
            konversi_kursUSD: data ? data.konversi_kursUSD : "",
            nominal_terbilang: data ? data.nominal_terbilang : ""
        }));
    }, [data]);

    const isDataEmpty = (isi) => {
        return <span className={Style.infoInput}>{isi}</span>
    }

    const banyakKegiatan = letterData.produk_forms.length;

    const renderTotalBiaya = () => (
        <React.Fragment>
            <tr>
                <td >{banyakKegiatan + 1}.</td>
                <td >Total Biaya</td>
                <td >:</td>
                <td >
                    <span style={{ fontWeight: "bold" }}> {formatCurrency(letterData.total_biaya) || isDataEmpty("jumlah total biaya semua kegiatan")} ({letterData.nominal_terbilang}) </span>
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
                        <p>{letterData.nama_penerbit.toUpperCase() || <span className={Style.infoInput}>NAMA PENANDA TANGAN</span>}</p>
                    </div>
                </div>
                <div style={{ marginBottom: "3rem", maxWidth: "40%" }}>
                    <p>Menyetujui,</p>
                    <div className={Style.sign}>
                        <p>PT CITILINK INDONESIA</p>
                        <p style={{ height: "32px" }}>LEARNING & DEVELOPMENT </p>
                        <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                        <p>{letterData.nama_tertuju.split(' ').slice(1).join(' ').toUpperCase() || <span className={Style.infoInput}>NAMA TERTUJU</span>}</p>
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

    const renderTemplateKegiatan = (dataKegiatan, index) => {
        return (
            <React.Fragment key={index}>
                <tr>
                    <td style={{ padding: "10px 0 0 0" }} >{index}.</td>
                    <td style={{ padding: "10px 0 0 0" }} >Jenis Pelatihan</td>
                    <td style={{ padding: "10px 5px 0px 5px" }}>:</td>
                    <td style={{ fontWeight: "bold", padding: "10px 0 0 0 ", verticalAlign: "bottom" }}>{dataKegiatan.jenis_kegiatan || <span className={Style.infoInput}>jenis kegiatan</span>}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Periode</td>
                    <td>:</td>
                    <td>{formatDate(dataKegiatan.tanggal_kegiatan) || <span className={Style.infoInput}>tanggal kegiatan</span>}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Jumlah Peserta</td>
                    <td>:</td>
                    <td>{dataKegiatan.jumlah_peserta || <span className={Style.infoInput}>jumlah</span>} Peserta</td>
                </tr>
                {letterData.template_option === "Produk saja" ? (
                    <tr>
                        <td></td>
                        <td>Biaya Kegiatan</td>
                        <td>:</td>
                        <td>{letterData.konversi_kursUSD === "Ya" ? "USD" : "Rp"} {dataKegiatan.biaya || <span className={Style.infoInput}>biaya kegiatan</span>} x {dataKegiatan.durasi || <span className={Style.infoInput}>durasi</span>} {letterData.konversi_kursUSD === "Ya" ? `x ${formatCurrency(letterData.kurs_USD)}` : ""} x {dataKegiatan.jumlah_peserta || <span className={Style.infoInput}>jumlah</span>} Peserta = <span style={{ fontWeight: "bold" }}> {formatCurrency(dataKegiatan.total_biaya_kegiatan) || <span className={Style.infoInput}>total biaya kegiatan</span>} ({dataKegiatan.nominal_terbilang})</span></td>
                    </tr>
                ) : (
                    <React.Fragment>
                        <tr>
                            <td></td>
                            <td>Biaya Meals</td>
                            <td>:</td>
                            <td>USD {dataKegiatan.biaya_meal} {letterData.konversi_kursUSD === "Ya" ? `x ${formatCurrency(letterData.kurs_USD)}` : ""} x {dataKegiatan.jumlah_peserta} Peserta = {formatCurrency(dataKegiatan.total_biaya_meals)}</td>
                        </tr>
                        {letterData.template_option === "Produk - Meals" && (
                            <tr>
                                <td></td>
                                <td>Total Biaya Kegiatan - Biaya Meals</td>
                                <td>:</td>
                                <td>USD {dataKegiatan.biaya} x {dataKegiatan.durasi} x {formatCurrency(letterData.kurs_USD)} x {dataKegiatan.jumlah_peserta} Peserta - {formatCurrency(dataKegiatan.total_biaya_meals)} = <span style={{ fontWeight: "bold" }}> {formatCurrency(dataKegiatan.total_biaya_kegiatan)} ({dataKegiatan.nominal_terbilang})</span></td>
                            </tr>
                        )}
                        {letterData.template_option === "Produk + Meals" && (
                            <tr>
                                <td></td>
                                <td>Total Biaya Kegiatan</td>
                                <td>:</td>
                                <td>USD {dataKegiatan.biaya} x {dataKegiatan.durasi} x {formatCurrency(letterData.kurs_USD)} x {dataKegiatan.jumlah_peserta} Peserta + {formatCurrency(dataKegiatan.total_biaya_meals)} = <span style={{ fontWeight: "bold" }}> {formatCurrency(dataKegiatan.total_biaya_kegiatan)} ({dataKegiatan.nominal_terbilang}) </span></td>
                            </tr>
                        )}
                    </React.Fragment>
                )}
            </React.Fragment>)
    }

    return (
        <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "30px 0", gap: "50px" }}>
            {/* Page 1 */}
            <div ref={page1Ref} className={Style.letter} id='page_1'>
                <div className={Style.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={Style.column}>
                    <div className={Style.colSatu}>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "160px", gap: "7px", marginBottom: "30px" }}>
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
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Kepada</p>
                            <p>Yth. {letterData.nama_tertuju || <span className={Style.infoInput}>Nama Tertuju</span>}</p>
                            <p>{letterData.jabatan || <span className={Style.infoInput}>Jabatan</span>}</p>
                            <p>{letterData.nama_perusahaan || <span className={Style.infoInput}>Nama Perusahaan</span>}</p>
                            <p style={{ maxWidth: "300px", height: "35px" }}>{letterData.alamat_perusahaan || <span className={Style.infoInput}>alamat perusahaan</span>}</p>
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Jakarta, {formatDate(letterData.tanggal_surat) || <span className={Style.infoInput}>tanggal surat</span>}</p>
                            <p>GARUDA/JKTVZE/20359/{getYear(letterData.tanggal_surat) || <span className={Style.infoInput}>tahun surat</span>}</p>
                            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>Surat Konfirmasi {letterData.sub_category || <span className={Style.infoInput}>subkategori</span>}</p>
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <p style={{ marginBottom: "16px" }}>Dengan hormat,</p>
                            <p style={{ marginBottom: "16px" }}>Merujuk {letterData.media_ref || <span className={Style.infoInput}>media</span>} yang disampaikan per tanggal {formatDate(letterData.tanggal_ref) || <span className={Style.infoInput}>tanggal referensi</span>} perihal {letterData.perihal || <span className={Style.infoInput}>isi perihal</span>}, dengan ini kami menyampaikan bahwa kami dapat melaksanakan permohonan dimaksud.</p>

                            <p>Adapun ketentuan dan syarat-syarat produk {letterData.sub_category || <span className={Style.infoInput}>subkategori</span>}, akan disampaikan dalam Surat Konfirmasi sebagaimana terlampir.</p>
                        </div>
                        {/* Catatan */}
                        <div style={{ marginBottom: "2rem" }}>

                            {
                                letterData.catatan !== null && letterData.catatan !== "" && letterData.catatan !== undefined && (
                                    <p style={{ fontWeight: "bold" }}>
                                        Catatan: {letterData.catatan}.
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
                                <p>{letterData.nama_penerbit.toUpperCase() || isDataEmpty("nama penanda tangan")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page 2 */}
            <div ref={page2Ref} className={Style.letter} id='page_2'>
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
                                        <td>GARUDA/JKTVZE/20049/{getYear(letterData.tanggal_surat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal</td>
                                        <td style={{ padding: "0 10px" }}>:</td>
                                        <td>{formatDate(letterData.tanggal_surat) || <span className={Style.infoInput}>tanggal surat</span>}</td>
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
                                        letterData.produk_forms.slice(0,
                                            (letterData.template_option === "Produk saja" ? 5 : 5)).map((data, index) => (
                                                renderTemplateKegiatan(data, index + 1)
                                            ))
                                    }
                                </tbody>
                            </table>
                            {letterData.template_option === "Produk saja" && (
                                <React.Fragment>
                                    {letterData.produk_forms.length === 1 && (
                                        renderTotalBiayaUntilSign()
                                    )}
                                    {letterData.produk_forms.length === 2 && (
                                        renderTotalBiayaUntilPenutup()
                                    )}
                                    {letterData.produk_forms.length === 3 && (
                                        renderTotalBiayaUntilCancelled()
                                    )}
                                    {letterData.produk_forms.length === 4 && (
                                        renderTotalBiayaUntilPembayaran()
                                    )}
                                    {/* {letterData.produk_forms.length === 5 && (
                                        // renderTotalBiaya()
                                        ""
                                    )}
                                    {letterData.produk_forms.length === 6 && (
                                        renderTotalBiayaUntilLokasi()
                                    )}
                                    {letterData.produk_forms.length === 7 && (
                                        renderTotalBiayaUntilPembayaran()
                                    )}
                                    {letterData.produk_forms.length === 8 && (
                                        <table className={Style.tableKegiatan} style={{ width: "100%" }}>
                                            <tbody>
                                                {renderTotalBiaya()}
                                            </tbody>
                                        </table>
                                    )} */}
                                </React.Fragment>
                            )}

                            {(letterData.template_option === "Produk + Meals" || letterData.template_option === "Produk - Meals") && (
                                <React.Fragment>
                                    {letterData.produk_forms.length === 1 && (
                                        renderTotalBiayaUntilSign()
                                    )}
                                    {letterData.produk_forms.length === 2 && (
                                        renderTotalBiayaUntilPenutup()
                                    )}
                                    {letterData.produk_forms.length === 3 && (
                                        renderTotalBiayaUntilCancelled()
                                    )}
                                    {letterData.produk_forms.length === 4 && (
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
                    (letterData.template_option === "Produk saja" && letterData.produk_forms.length > 1) ||
                    (letterData.produk_forms.length > 1 && letterData.template_option === "Produk + Meals" || letterData.template_option === "Produk - Meals"))
                && (
                    <div ref={page3Ref} className={Style.letter} id='page_3'>
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
                                                letterData.produk_forms.slice((letterData.template_option === "Produk saja" ? 5 : 5), 10).map((data, index) => (
                                                    renderTemplateKegiatan(data, index + 6)
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                    {letterData.template_option === "Produk saja" && (
                                        <React.Fragment>
                                            {letterData.produk_forms.length === 2 && (
                                                renderTandaTangan()
                                            )}
                                            {letterData.produk_forms.length === 3 && (
                                                renderPenutupUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 4 && (
                                                renderLokasiUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 5 && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 6 && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 7 && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 8 && (
                                                renderTotalBiayaUntilPenutup()
                                            )}
                                            {letterData.produk_forms.length === 9 && (
                                                renderTotalBiayaUntilCancelled()
                                            )}
                                            {letterData.produk_forms.length === 10 && (
                                                renderTotalBiayaUntilPembayaran()
                                            )}
                                        </React.Fragment>
                                    )}

                                    {(letterData.template_option === "Produk + Meals" || letterData.template_option === "Produk - Meals") && (
                                        <React.Fragment>
                                            {letterData.produk_forms.length === 2 && (
                                                renderTandaTangan()
                                            )}
                                            {letterData.produk_forms.length === 3 && (
                                                renderPenutupUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 4 && (
                                                renderLokasiUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 5 && (
                                                renderPembayaranUntilSign()
                                            )}
                                            {(letterData.produk_forms.length === 6) && (
                                                renderTotalBiayaUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 7 && (
                                                renderTotalBiayaUntilPenutup()
                                            )}
                                            {letterData.produk_forms.length === 8 && (
                                                renderTotalBiayaUntilCancelled()
                                            )}
                                            {letterData.produk_forms.length === 9 && (
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
                // (letterData.produk_forms.length >= 7 && letterData.template_option === "Produk + Meals" || letterData.template_option === "Produk - Meals" || letterData.template_option === "Produk saja")
                ((letterData.template_option === "Produk saja" && letterData.produk_forms.length >= 8) ||
                    (letterData.produk_forms.length >= 7 && letterData.template_option === "Produk + Meals" || letterData.template_option === "Produk - Meals"))
                && (
                    <div ref={page4Ref} className={Style.letter} id='page_4'>
                        <div className={Style.logo}>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={Style.column}>
                            <div className={Style.colSatu}></div>
                            <div className={Style.colDua}>
                                <div style={{ marginBottom: "2rem" }}>

                                    {letterData.template_option === "Produk saja" && (
                                        <React.Fragment>
                                            {letterData.produk_forms.length === 8 && (
                                                renderTandaTangan()
                                            )}
                                            {letterData.produk_forms.length === 9 && (
                                                renderPenutupUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 10 && (
                                                renderLokasiUntilSign()
                                            )}
                                        </React.Fragment>
                                    )}

                                    {(letterData.template_option === "Produk + Meals" || letterData.template_option === "Produk - Meals") && (
                                        <React.Fragment>
                                            {letterData.produk_forms.length === 8 && (
                                                renderPenutupUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 9 && (
                                                renderLokasiUntilSign()
                                            )}
                                            {letterData.produk_forms.length === 10 && (
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

// const ConfirmationLetter = ({ template_option, letterInfo, customerInfo, productInfo, infoKegiatan, infoTNC, totalBiayaMealsPerKegiatan, seTotalBiayaMealsPerKegiatan }) => {
//     const { nomorSurat, namaPenerbit, tanggalSurat, perihal, mediaRef, tanggalRef, jenisPermohonan, catatan } = letterInfo;
//     const { namaTertuju, jabatan, namaPerusahaan, alamatPerusahaan } = customerInfo;
//     const { category, subCategory } = productInfo;
//     const { jumlahProduk, produkForms: [], totalBiaya } = infoKegiatan;
//     const { jumlahTNC, TNC: [] } = infoTNC;

//     const banyakKegiatan = infoKegiatan.produkForms.length;