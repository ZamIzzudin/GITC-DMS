import React from 'react'
import { Form } from 'react-bootstrap'

import Style from "./inputRevisi.module.css"

const InputRevisi = () => {
    return (
        <div className={Style.inputRevisi}>
            <div className={Style.title}>
                <h4>INPUT REVISI</h4>
            </div>
            <Form className={Style.formInputRevisi}>
                <Form.Group controlId="namaPenerbit" className="mb-2">
                    <Form.Label>Nama Penerbit</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="tanggalSurat" className="mb-2">
                    <Form.Label>Tanggal Surat</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="subject" className="mb-2">
                    <Form.Label>Subject/Perihal</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="namaTertuju" className="mb-2">
                    <Form.Label>Nama Tertuju</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="mediaReferensi" className="mb-2">
                    <Form.Label>Media Referensi</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="tanggalReferensi" className="mb-2">
                    <Form.Label>Tanggal Referensi</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="jenisPermohonan" className="mb-2">
                    <Form.Label>Jenis Permohonan</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="catatan" className="mb-2">
                    <Form.Label>Catatan</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={3} />
                </Form.Group>
                <Form.Group controlId="jumlahProduk" className="mb-2">
                    <Form.Label>Jumlah Produk</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="biayaMeal" className="mb-2">
                    <Form.Label>Biaya Meal</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="kursUSD" className="mb-2">
                    <Form.Label>Kurs USD</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1} />
                </Form.Group>
                <Form.Group controlId="produk" className="mb-2">
                    <Form.Label>Tentang Produk</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={10} />
                </Form.Group>
            </Form>

        </div>
    )
}

export default InputRevisi