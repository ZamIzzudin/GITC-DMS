import React from 'react'
import { useState } from 'react'

import Logo from "../../../../assets/picture/Logo Garuda.svg"
import Terbilang from "../../../tools/Terbilang"

import Style from "./confirmationLetter.module.css"

const ConfirmationLetter = ({ templateOption }) => {

    const totalKegiatan = 3500000;
    const terbilang = Terbilang(totalKegiatan)

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
                            <p>Yth. Ibu Mariati Soetjahja</p>
                            <p>Managing Director</p>
                            <p>Lotus Tour & Travel</p>
                            <p>Apartment Permata Senayan, Jakarta Pusat</p>
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Jakarta, 25 September 2023</p>
                            <p>GARUDA/JKTVZE/20359/2023</p>
                            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>Surat Konfirmasi Mandotory Training FA A320</p>
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <p style={{ marginBottom: "16px" }}>Dengan hormat,</p>
                            <p style={{ marginBottom: "16px" }}>Merujak email yang disampaikan per tanggal 31 Agustus 2023 perihal permohonan kunjungan ke Garuda Indonesia Training Center dan Sekolah Charis (Batam) dan Lotus Tour & Travel, dengan ini kami menyampaikan bahwa kami dapat melaksanakan permohonan dimaksud.</p>

                            <p >Adapun ketentuan dan syarat-syarat Sewa Ruang Kelas Mandatory Training FA A320, akan disampaikan dalam Surat Konfirmasi sebagaimana terlampir.</p>
                        </div>
                        {/* Catatan */}
                        <div style={{ marginBottom: "2rem" }}>
                            <p style={{ fontWeight: "bold" }}>
                                Catatan: Mulai tanggal 4 oktober 2021 setiap training tidak disediakan meals, sehingga akan dikurangi biaya meals sebesar USD 5/peserta. Ref. PKSNo. GARUDA: IG/PERJ/DI-3032/2019 & No.CITILINK: CITILINK/JKTDSQG/PERJ-6069/0119 harga sewa kelas sebesar USD 280/Hari dan harga CET akan dikurangi biaya meals USD 5 sesuai dengan jumlah peserta training.
                            </p>
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Hormat Kami,</p>
                            <div className={Style.sign}>
                                <p>PT GARUDA INDONESIA (PERSERO) Tbk</p>
                                <p>LEARNING & DEVELOPMENT</p>
                                <p>SM Excess Capacity Management</p>
                                <div className={Style.tandaTangan} style={{ height: "100px" }}></div>
                                <p>VONNY FRANCISKA PINONTOAN</p>
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
                                        <td>GARUDA/JKTVZE/20049/2023</td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal</td>
                                        <td style={{ padding: "0 10px" }}>:</td>
                                        <td>3 Febriari 2023</td>
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
                                        templateOption === "Produk saja" ? (
                                            <tr>
                                                <td>1.</td>
                                                <td>
                                                    <p>Jenis Pelatihan</p>
                                                    <p>Periode</p>
                                                    <p>Jumlah Peserta</p>
                                                    {/* jika perhari beda lagi */}
                                                    <p>Biaya Kegiatan</p>
                                                </td>
                                                <td>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                </td>
                                                <td>
                                                    <p style={{ fontWeight: "bold" }}>Sewa Kelas Recurrent Training First AID</p>
                                                    <p>7 Februari 2023</p>
                                                    <p>17 Peserta</p>
                                                    <p>USD 280 x Rp 14.500 x 17 Peserta = Rp 4.700.000</p>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <td>1.</td>
                                                <td>
                                                    <p>Jenis Pelatihan</p>
                                                    <p>Periode</p>
                                                    <p>Jumlah Peserta</p>
                                                    <p>Biaya Meals</p>
                                                    <p>Biaya Kegiatan</p>
                                                    <p>Total Biaya Kegiatan</p>
                                                </td>
                                                <td>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                </td>
                                                <td>
                                                    <p style={{ fontWeight: "bold" }}>Sewa Kelas Recurrent Training First AID</p>
                                                    <p>7 Februari 2023</p>
                                                    <p>17 Peserta</p>
                                                    <p>USD 5 x Rp 14.500 x 17 Peserta = Rp 1.200.000</p>
                                                    <p>USD 280 x Rp 14.500 x 17 Peserta = Rp 4.700.000</p>
                                                    {/* <p>Rp {4700000 - 1200000} = Rp {3500000} ({terbilang} rupiah)</p> */}
                                                    {/* <p>Rp {4700000 - 1200000} = Rp {3500000} ({terbilang} rupiah)</p> */}

                                                    {
                                                        templateOption === "Produk - Meals" ? (
                                                            <p>Rp Rp 4.700.000 - Rp 1.200.000 = Rp {3500000} ({terbilang} rupiah)</p>
                                                        ) : templateOption === "Produk + Meals" ? (
                                                            <p>Rp 4.700.000 + Rp 1.200.000 = Rp {5900000} ({terbilang} rupiah)</p>
                                                        ) : <p>Error</p>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }

                                    {/* Total Biaya */}
                                    <tr>
                                        <td>5.</td>
                                        <td>Total Biaya Kegiatan</td>
                                        <td>:</td>
                                        <td>Rp 4.700.000 + Rp 1.200.000 + Rp 4.700.000 + Rp 1.200.000 + Rp 4.700.000 + Rp 1.200.000 = Rp 3.500.000 ({terbilang} rupiah)</td>
                                    </tr>

                                    {/* Pembayaran */}
                                    <tr>
                                        <td>6.</td>
                                        <td>Pembayaran</td>
                                        <td>:</td>
                                        <td className={Style.pembayaran}>Dilakukan sebesar 100% dengan cara transfer kepada:
                                            <p>Nama Bank : PT.Bank Rakyat Indonesia (Persero), Tbk</p>
                                            <p>Alamat <span style={{ marginLeft: "30px" }}>:</span> Jalan Tanah Abang IV, Jakarta</p>
                                            <p>No. Rek. <span style={{ marginLeft: "21px" }}>:</span> IDR 0018.01.002013.30.1</p>
                                            <p>Atas Nama<span style={{ marginLeft: "9px" }}>:</span> PT Garuda Indonesia (Persero) Tbk</p>
                                        </td>
                                    </tr>
                                    {/* Lokasi */}
                                    <tr>
                                        <td>7.</td>
                                        <td>Lokasi</td>
                                        <td>:</td>
                                        <td>
                                            <p>Garuda Indonesia Training Center</p>
                                            <p>Jl. Duri Kosambi Raya No. 125</p>
                                            <p>Jakarta 11750 - Indonesia</p>
                                        </td>
                                    </tr>
                                    {/* Cancellation Fee */}
                                    <tr>
                                        <td>8.</td>
                                        <td>Cancellation Fee</td>
                                        <td>:</td>
                                        <td>
                                            <p>Pembatalan 1 (satu) hari kerja sebelum pelaksanaan training akan dikenakan charge 100%</p>
                                            <p>Pembatalan 2 (dua) samapi 3 (tiga) hari kerja sebelum pelaksanaan training akan dikenakan charge 50%</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Penutup Surat */}
                            <div>
                                <p style={{ marginBottom: "1rem" }}>Surat Konfirmasi ini merupakan satu kesatuan yang tidak terpisahkan dengan syarat dan ketentuan umum yang berlaku di Garuda Indonesia Training Center. Surat Konfirmasi ini dapat juga digunakan sebagai INVOICE / penagihan training.</p>
                                <p>Mohon Surat Konfirmasi ini ditanda tangani dan dikirim kembali kepada kami. <br />
                                    Terima Kasih.</p>
                            </div>
                        </div>
                        <div className={Style.signWrapper}>
                            <div style={{ marginBottom: "3rem", maxWidth: "45%" }}>
                                <p>Hormat Kami,</p>
                                <div className={Style.sign}>
                                    <p>PT GARUDA INDONESIA (PERSERO) Tbk</p>
                                    <p>LEARNING & DEVELOPMENT</p>
                                    <p>SM Excess Capacity Management</p>
                                    <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                                    <p>VONNY FRANCISKA PINONTOAN</p>
                                </div>
                            </div>
                            <div style={{ marginBottom: "3rem", maxWidth: "40%" }}>
                                <p>Menyetujui,</p>
                                <div className={Style.sign}>
                                    <p>PT CITILINK INDONESIA</p>
                                    <p style={{ height: "32px" }}>LEARNING & DEVELOPMENT </p>
                                    <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                                    <p>VONNY FRANCISKA PINONTOAN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page 3 */}
            <div className={Style.letter}>
                <div className={Style.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={Style.column}>
                    <div className={Style.colSatu}></div>
                    <div className={Style.colDua}>
                        {/* Kegiatan page 2 muat max 5*/}
                        <div style={{ marginBottom: "2rem" }}>
                            <table className={Style.tableKegiatan} style={{ width: "100%", margin: "1rem 0" }}>
                                <tbody>
                                    {/* Kegiatan */}
                                    {/* produk & meal */}
                                    {
                                        templateOption === "Produk saja" ? (
                                            <tr>
                                                <td>1.</td>
                                                <td>
                                                    <p>Jenis Pelatihan</p>
                                                    <p>Periode</p>
                                                    <p>Jumlah Peserta</p>
                                                    {/* jika perhari beda lagi */}
                                                    <p>Biaya Kegiatan</p>
                                                </td>
                                                <td>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                </td>
                                                <td>
                                                    <p style={{ fontWeight: "bold" }}>Sewa Kelas Recurrent Training First AID</p>
                                                    <p>7 Februari 2023</p>
                                                    <p>17 Peserta</p>
                                                    <p>USD 280 x Rp 14.500 x 17 Peserta = Rp 4.700.000</p>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <td>1.</td>
                                                <td>
                                                    <p>Jenis Pelatihan</p>
                                                    <p>Periode</p>
                                                    <p>Jumlah Peserta</p>
                                                    <p>Biaya Meals</p>
                                                    <p>Biaya Kegiatan</p>
                                                    <p>Total Biaya Kegiatan</p>
                                                </td>
                                                <td>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                </td>
                                                <td>
                                                    <p style={{ fontWeight: "bold" }}>Sewa Kelas Recurrent Training First AID</p>
                                                    <p>7 Februari 2023</p>
                                                    <p>17 Peserta</p>
                                                    <p>USD 5 x Rp 14.500 x 17 Peserta = Rp 1.200.000</p>
                                                    <p>USD 280 x Rp 14.500 x 17 Peserta = Rp 4.700.000</p>
                                                    {/* <p>Rp {4700000 - 1200000} = Rp {3500000} ({terbilang} rupiah)</p> */}
                                                    {/* <p>Rp {4700000 - 1200000} = Rp {3500000} ({terbilang} rupiah)</p> */}

                                                    {
                                                        templateOption === "Produk - Meals" ? (
                                                            <p>Rp Rp 4.700.000 - Rp 1.200.000 = Rp {3500000} ({terbilang} rupiah)</p>
                                                        ) : templateOption === "Produk + Meals" ? (
                                                            <p>Rp 4.700.000 + Rp 1.200.000 = Rp {5900000} ({terbilang} rupiah)</p>
                                                        ) : <p>Error</p>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }

                                    {/* Total Biaya */}
                                    <tr>
                                        <td>5.</td>
                                        <td>Total Biaya Kegiatan</td>
                                        <td>:</td>
                                        <td>Rp 4.700.000 + Rp 1.200.000 + Rp 4.700.000 + Rp 1.200.000 + Rp 4.700.000 + Rp 1.200.000 = Rp 3.500.000 ({terbilang} rupiah)</td>
                                    </tr>

                                    {/* Pembayaran */}
                                    <tr>
                                        <td>6.</td>
                                        <td>Pembayaran</td>
                                        <td>:</td>
                                        <td className={Style.pembayaran}>Dilakukan sebesar 100% dengan cara transfer kepada:
                                            <p>Nama Bank : PT.Bank Rakyat Indonesia (Persero), Tbk</p>
                                            <p>Alamat <span style={{ marginLeft: "30px" }}>:</span> Jalan Tanah Abang IV, Jakarta</p>
                                            <p>No. Rek. <span style={{ marginLeft: "21px" }}>:</span> IDR 0018.01.002013.30.1</p>
                                            <p>Atas Nama<span style={{ marginLeft: "9px" }}>:</span> PT Garuda Indonesia (Persero) Tbk</p>
                                        </td>
                                    </tr>
                                    {/* Lokasi */}
                                    <tr>
                                        <td>7.</td>
                                        <td>Lokasi</td>
                                        <td>:</td>
                                        <td>
                                            <p>Garuda Indonesia Training Center</p>
                                            <p>Jl. Duri Kosambi Raya No. 125</p>
                                            <p>Jakarta 11750 - Indonesia</p>
                                        </td>
                                    </tr>
                                    {/* Cancellation Fee */}
                                    <tr>
                                        <td>8.</td>
                                        <td>Cancellation Fee</td>
                                        <td>:</td>
                                        <td>
                                            <p>Pembatalan 1 (satu) hari kerja sebelum pelaksanaan training akan dikenakan charge 100%</p>
                                            <p>Pembatalan 2 (dua) samapi 3 (tiga) hari kerja sebelum pelaksanaan training akan dikenakan charge 50%</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Penutup Surat */}
                            <div>
                                <p style={{ marginBottom: "1rem" }}>Surat Konfirmasi ini merupakan satu kesatuan yang tidak terpisahkan dengan syarat dan ketentuan umum yang berlaku di Garuda Indonesia Training Center. Surat Konfirmasi ini dapat juga digunakan sebagai INVOICE / penagihan training.</p>
                                <p>Mohon Surat Konfirmasi ini ditanda tangani dan dikirim kembali kepada kami. <br />
                                    Terima Kasih.</p>
                            </div>
                        </div>
                        <div className={Style.signWrapper}>
                            <div style={{ marginBottom: "3rem", maxWidth: "45%" }}>
                                <p>Hormat Kami,</p>
                                <div className={Style.sign}>
                                    <p>PT GARUDA INDONESIA (PERSERO) Tbk</p>
                                    <p>LEARNING & DEVELOPMENT</p>
                                    <p>SM Excess Capacity Management</p>
                                    <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                                    <p>VONNY FRANCISKA PINONTOAN</p>
                                </div>
                            </div>
                            <div style={{ marginBottom: "3rem", maxWidth: "40%" }}>
                                <p>Menyetujui,</p>
                                <div className={Style.sign}>
                                    <p>PT CITILINK INDONESIA</p>
                                    <p style={{ height: "32px" }}>LEARNING & DEVELOPMENT </p>
                                    <div className={Style.tandaTangan} style={{ height: "80px" }}></div>
                                    <p>VONNY FRANCISKA PINONTOAN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationLetter

{/* <tr>
                                        <td>1.</td>
                                        <td>Jenis Pelatihan</td>
                                        <td>:</td>
                                        <td style={{ fontWeight: "bold" }}>Sewa Kelas Recurrent Training First AID</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Periode</td>
                                        <td>:</td>
                                        <td>7 Februari 2023</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Jumlah Peserta</td>
                                        <td>:</td>
                                        <td>17 Peserta</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Biaya Meals</td>
                                        <td>:</td>
                                        <td>USD 5 x Rp 14.500 x 17 Peserta = Rp 1.200.000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Biaya Kegiatan</td>
                                        <td>:</td>
                                        <td>USD 280 x Rp 14.500 x 17 Peserta = Rp 4.700.000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Total Biaya Kegiatan</td>
                                        <td>:</td>
                                        <td>Rp 4.700.000 - Rp 1.200.000 = Rp 3.500.000 ({terbilang} rupiah)</td>
                                    </tr> */}