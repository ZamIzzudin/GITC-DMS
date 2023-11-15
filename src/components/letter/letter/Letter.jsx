import React from 'react'

import Logo from "../../../assets/picture/Logo Garuda.svg"
import Style from "./letter.module.css"

const Letter = () => {
    return (
        <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "30px 0" }}>
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
                        <div style={{ marginBottom: "5rem" }}>
                            <p>Kepada</p>
                            <p>Yth. Ibu Mariati Soetjahja</p>
                            <p>Managing Director</p>
                            <p>Lotus Tour & Travel</p>
                            <p>Apartment Permata Senayan, Jakarta Pusat</p>
                        </div>

                        <div style={{ marginBottom: "3rem" }}>
                            <p>Jakarta, 25 September 2023</p>
                            <p>GARUDA/JKTVZE/20359/2023</p>
                            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>Surat Penawaran</p>
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p style={{ marginBottom: "16px" }}>Dengan hormat,</p>
                            <p>Menindaklanjuti email tanggal 31 Agustus 2023 perihal permohonan kunjungan ke Garuda Indonesia Training Center dan Sekolah Charis (Batam) dan Lotus Tour & Travel, bersama ini disampaikan penawaran harga edutrip sebagai berikut :</p>
                            <table style={{ width: "100%", marginTop: "1rem" }}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Detail</th>
                                        <th>Biaya / Peserta</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td style={{ textAlign: "left" }}>Kunjungan Fasilitas GITC</td>
                                        <td>Rp 250.000,00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                                <p style={{ fontSize: "12px" }}>*Termasuk fasilitas Simulator, Mockup, & Lunch</p>
                                <p style={{ fontSize: "12px" }}> *Harga sudah termasuk PPN 11%</p>
                            </div>
                            <p >Demikian disampaikan, perkenan konfirmasi lebih lanjut apabila setuju dengan surat penawaran ini. Atas perhatian dan kerjasamanya kami ucapkan terima kasih.</p>
                        </div>
                        <div style={{ marginBottom: "3rem" }}>
                            <p>Hormat Kami,</p>
                            <div className={Style.xxx}>
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
        </div>
    )
}

export default Letter