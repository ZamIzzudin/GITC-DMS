import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

import Style from "./inputLetter.module.css"

const InputLetter = ({ templateOption, setTemplateOption }) => {
    return (
        <div className={Style.inputLetter}>
            {/* <p>Nilai yang dipilih: {templateOption}</p> */}
            <Form className={Style.formInputLetter}>
                <Form.Group controlId="template" className="mb-2">
                    <Form.Label style={{ fontWeight: "bold" }}>Pilih Template Surat</Form.Label>
                    <Form.Select value={templateOption} onChange={(e) => { setTemplateOption(e.target.value) }}>
                        <option>Produk saja</option>
                        <option>Produk + Meals</option>
                        <option>Produk - Meals</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="infromasiSurat" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Surat</p>
                    <Form.Group controlId="nomorSurat" className="mb-2">
                        <Form.Label>Nomor Surat</Form.Label>
                        <Form.Control type="text" size='sm' readOnly />
                    </Form.Group>
                    <Form.Group controlId="namaPenerbit" className="mb-2">
                        <Form.Label>Nama Penerbit</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="tanggalSurat" className="mb-2">
                        <Form.Label>Tanggal Surat</Form.Label>
                        <Form.Control type="date" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="subject" className="mb-2">
                        <Form.Label>Subject/Perihal</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="mediaReferensi" className="mb-2">
                        <Form.Label>Media Referensi</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="tanggalReferensi" className="mb-2">
                        <Form.Label>Tanggal Referensi</Form.Label>
                        <Form.Control type="date" size='md' />
                    </Form.Group>
                    <Form.Group controlId="jenisPermohonan" className="mb-2">
                        <Form.Label>Jenis Permohonan</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="catatan" className="mb-2">
                        <Form.Label>Catatan <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*optional</span></Form.Label>
                        <Form.Control as="textarea" size='sm' rows={3} />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiCustomer" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Customer</p>
                    <Form.Group controlId="namaTertuju" className="mb-2">
                        <Form.Label>Nama Tertuju</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="jabatan" className="mb-2">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="namaPerusahaan" className="mb-2">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control type="text" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="alamatPerusahaan" className="mb-2">
                        <Form.Label>Alamat Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm' />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiProduk" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                    <Form.Group controlId="kategoriProduk" className="mb-2">
                        <Form.Label>Kategori Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'>
                            <option>Open this select menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="subProduk" className="mb-2">
                        <Form.Label>Jenis Sub-Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'>
                            <option>Open this select menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </Form.Select>
                    </Form.Group>
                    {/* Jumlah Produk */}
                    <Form.Group controlId="jumlahProduk" className="mb-2">
                        <Form.Label>Jumlah Produk</Form.Label>
                        <Form.Control type="number" size='sm' />
                    </Form.Group>
                </Form.Group>
                <p style={{ fontWeight: "bold" }}>Informasi Kegiatan</p>
                <Form.Group controlId="informasiKegiatan" className="mb-2">
                    <Form.Group controlId="jenisKegiatan" className="mb-2">
                        <Form.Label>Jenis Kegiatan</Form.Label>
                        <Form.Control type="text" size='md' />
                    </Form.Group>
                    <Form.Group controlId="tanggalKegiatan" className="mb-2">
                        <Form.Label>Tanggal Kegiatan</Form.Label>
                        <Form.Control type="date" size='md' />
                    </Form.Group>
                    <Form.Group controlId="jumlahPeserta" className="mb-2">
                        <Form.Label>Jumlah Peserta</Form.Label>
                        <Form.Control type="number" size='md' />
                    </Form.Group>
                    {/* input biaya meal */}
                    <Form.Group controlId="biayaMeal" className="mb-2">
                        <Form.Label>Biaya Meal</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                            <Form.Control type="number" size='sm' />
                        </InputGroup>
                    </Form.Group>

                    {/* input kurs USD saat ini */}
                    <Form.Group controlId="kursUSD" className="mb-2">
                        <Form.Label>Kurs USD</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                            <Form.Control type="number" size='sm' />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="biaya" className="mb-2">
                        <Form.Label>Biaya</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                            <Form.Control type="number" size='sm' />
                        </InputGroup>
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="termNCondition" className="mb-2">
                    <Form.Label>Term n Condition</Form.Label>
                    <Form.Control type="text" size='md' />
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit" className={Style.btnSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default InputLetter