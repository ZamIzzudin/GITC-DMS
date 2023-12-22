import React from 'react'
import { Form, Button } from 'react-bootstrap'

import Style from "./inputRevisi.module.css"

const InputRevisi = ({ inputRevisi, setInputRevisi, editLetter }) => {

    const handleInputRevisi = (prop, value) => {
        setInputRevisi({
            ...inputRevisi,
            revisi: {
                ...inputRevisi.revisi,
                [prop]: value
            }
        });
    }

    const handleRevisi = (e) => {
        e.preventDefault()
        editLetter()
    }



    return (
        <div className={Style.inputRevisi}>
            <Form className={Style.formInputRevisi} onSubmit={handleRevisi}>
                <Form.Group controlId="template" className="mb-2" >
                    <Form.Label style={{ fontWeight: "bold" }}>Template Surat</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1}
                        onChange={(e) => handleInputRevisi("template_option", e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="infromasiSurat" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Surat</p>
                    <Form.Group controlId="namaPenerbit" className="mb-2">
                        <Form.Label>Nama Penerbit</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("nama_penerbit", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="tanggalSurat" className="mb-2">
                        <Form.Label>Tanggal Surat</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("tanggal_surat", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="subject" className="mb-2">
                        <Form.Label>Subject/Perihal</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("perihal", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="mediaReferensi" className="mb-2">
                        <Form.Label>Media Referensi</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("media_ref", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="tanggalReferensi" className="mb-2">
                        <Form.Label>Tanggal Referensi</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("tanggal_ref", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="jenisPermohonan" className="mb-2">
                        <Form.Label>Jenis Permohonan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("jenis_permohonan", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="catatan" className="mb-2">
                        <Form.Label>Catatan <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*optional</span></Form.Label>
                        <Form.Control as="textarea" size='sm' rows={3}
                            onChange={(e) => handleInputRevisi("catatan", e.target.value)}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiCustomer" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Customer</p>
                    <Form.Group controlId="namaTertuju" className="mb-2">
                        <Form.Label>Nama Tertuju</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("nama_tertuju", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="jabatan" className="mb-2">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("jabatan", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPerusahaan" className="mb-2">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("nama_perusahaan", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="alamatPerusahaan" className="mb-2">
                        <Form.Label>Alamat Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={2}
                            onChange={(e) => handleInputRevisi("alamat_perusahaan", e.target.value)}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiProduk" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                    <Form.Group controlId="kategoriProduk" className="mb-2">
                        <Form.Label>Kategori Produk </Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("category", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="subkategori" className="mb-2">
                        <Form.Label>Jenis Sub-Produk</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("sub_category", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="jumlahProduk" className="mb-2">
                        <Form.Label>Jumlah Produk </Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                            onChange={(e) => handleInputRevisi("jumlah_produk", e.target.value)}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiKegiatan" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Kegiatan</p>

                    <Form.Group controlId="kegiatan" className="mb-2">
                        <Form.Label>Tentang Kegiatan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={10}
                            onChange={(e) => handleInputRevisi("informasi_kegiatan", e.target.value)}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiTnC" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Term n Condition</p>
                    <Form.Group controlId="termNCondition" className="mb-2">
                        <Form.Label>Term n Condition</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={2}
                            onChange={(e) => handleInputRevisi("informasi_term", e.target.value)}
                        />
                    </Form.Group>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit" className={`text-bg-danger ${Style.btnSubmit}`}>
                        Revisi
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default InputRevisi