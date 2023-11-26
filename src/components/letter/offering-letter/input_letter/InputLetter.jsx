import React from 'react'
import { useState } from 'react';

import { Form, InputGroup, Button } from 'react-bootstrap'

import Style from "./inputLetter.module.css"

const InputLetter = () => {

    const [date, setDate] = useState('')

    console.log(date)
    return (
        <div className={Style.inputLetter}>
            <Form className={Style.formInputLetter}>
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
                    <Form.Control type="date" size='sm'
                        onChange={(e) => setDate(e.target.value)}
                    />
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

                <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                <Form.Group controlId="produk" className="mb-2">
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
                    <Form.Group controlId="jumlahKegiatan" className="mb-2">
                        <Form.Label >Jumlah Penawaran</Form.Label>
                        <Form.Control type="number" size='sm' />
                    </Form.Group>

                    <p style={{ fontWeight: "bold" }}>Informasi Penawaran</p>
                    {/* Jenis Kegiatan */}
                    <Form.Group controlId="penawaran" className="mb-2">
                        <Form.Group controlId="jenisKegiatan" className="mb-2">
                            <Form.Label>Jenis Kegiatan</Form.Label>
                            <Form.Control type="text" size='sm' />
                        </Form.Group>
                        <Form.Group controlId="durasi" className="mb-2">
                            <Form.Label>Durasi</Form.Label>
                            <Form.Control type="text" size='sm' />
                        </Form.Group>
                        <Form.Group controlId="biaya" className="mb-2">
                            <Form.Label>Biaya</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                                <Form.Control type="number" size='sm' />
                            </InputGroup>
                        </Form.Group>
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="informasiTnC" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Term n Condition</p>
                    <Form.Group controlId="jumlahTnC" className="mb-2">
                        <Form.Label>Jumlah Term n Condition</Form.Label>
                        <Form.Control type="number" size='sm' />
                    </Form.Group>
                    <Form.Group controlId="termNCondition" className="mb-2">
                        <Form.Label>Term n Condition</Form.Label>
                        <Form.Control type="text" size='md' />
                    </Form.Group>
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