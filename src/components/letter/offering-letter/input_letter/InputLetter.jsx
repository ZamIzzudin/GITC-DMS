import React from 'react'
import { useState, useEffect } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'

import InputFile from '../../../tools/inputFile'

import { formatDate, formatDateToLetterNumber } from '../../../tools/FormatDate'
import Style from "./inputLetter.module.css"
import Products from "../../../../utils/Product.json"


const InputOfferingLetter = ({ letterData, setLetterData, isUpload, getData }) => {

    const [typeDurasi, setTypeDurasi] = useState([]);
    const [inputDurasi, setInputDurasi] = useState('');
    const [file, setFile] = useState(null)


    const productCode = Products.categories.find((cat) => cat.name === letterData.category)
        ?.subcategories.find((subCat) => subCat.name === letterData.sub_category)?.code

    const dateLetter = formatDateToLetterNumber(letterData.tanggal_surat)

    useEffect(() => {
        if (!isUpload & letterData.tanggal_surat && productCode) {
            setLetterData({ ...letterData, nomor_surat: `OL${productCode}-20015-${dateLetter}` });
        }
    }, [letterData.nomor_surat, productCode, dateLetter])

    const handleJumlahPenawaranChange = (e) => {
        const newValue = parseInt(e.target.value, 10 || 1);
        setLetterData((prevLetterData) => ({
            ...prevLetterData,
            jumlah_penawaran: newValue,
            penawaran_forms: Array.from({ length: newValue }, (_, index) => prevLetterData.penawaran_forms[index] || {
                jenisPenawaran: '',
                durasi: '',
                biaya: ''
            }),
        }));
    };

    const handlePenawaranFormsChange = (index, prop, value) => {
        setLetterData((prevLetterData) => {
            const newForms = [...prevLetterData.penawaran_forms];
            newForms[index][prop] = value;

            return {
                ...prevLetterData,
                penawaran_forms: newForms,
            };
        });
    };

    const handleDurasiChange = (index, value) => {
        console.log(`Updating typeDurasi[${index}] to ${value}`);
        setTypeDurasi((prevTypeDurasi) => {
            const newTypeDurasi = [...prevTypeDurasi];
            newTypeDurasi[index] = value;
            return newTypeDurasi;
        });
    };

    const handleJumlahTNCChange = (e) => {
        const newValue = parseInt(e.target.value, 10 || 1);
        setLetterData((prevLetterData) => ({
            ...prevLetterData,
            jumlah_TNC: newValue,
            TNC: Array.from({ length: newValue }, (_, index) => prevLetterData.TNC[index] || {
                detail: ''
            }),
        }));
    };

    const handleTNCChange = (index, prop, value) => {
        setLetterData((prevLetterData) => {
            const newForms = [...prevLetterData.TNC];
            newForms[index][prop] = value;
            return {
                ...prevLetterData,
                TNC: newForms,
            };
        });
    };

    console.log(letterData)

    const renderTNC = () => {
        return letterData.TNC.map((tnc, index) => (
            <Form.Group key={index} controlId={`TNC-${index}`} className="mb-2">
                <Form.Label>Term n Condition ke-{index + 1}</Form.Label>
                <Form.Control type="text" size='md'
                    value={tnc.detail}
                    onChange={(e) => handleTNCChange(index, 'detail', e.target.value)}
                />
            </Form.Group>
        ));
    }

    const renderPenawaranForms = () => {
        return letterData.penawaran_forms.map((form, index) => (
            <Form.Group key={index} controlId="kegiatan" className="mb-2">
                <p style={{ fontWeight: "bold" }}>Penawaran ke-{index + 1}</p>
                <Form.Group controlId={`jenisPenawaran-${index}`} className="mb-2">
                    <Form.Label>Jenis Penawaran</Form.Label>
                    <Form.Control type="text" size='md'
                        value={form.jenis_penawaran}
                        onChange={(e) => handlePenawaranFormsChange(index, 'jenis_penawaran', e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={`durasi-${index}`} className="mb-2">
                    <Form.Label>Durasi</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control type="number" size='sm'
                            onChange={(e) => {
                                // console.log(e.target.value, index);
                                setInputDurasi(e.target.value)
                                const input = e.target.value;
                                if (input) {
                                    handlePenawaranFormsChange(index, 'durasi', input + ' ' + typeDurasi[index]);
                                }
                                // console.log(infoKegiatan.produkForms)
                            }
                            }
                        />
                        <Form.Select onChange={(e) => {
                            handleDurasiChange(index, e.target.value)
                            const input = e.target.value;
                            if (input) {
                                handlePenawaranFormsChange(index, 'durasi', inputDurasi + ' ' + input);
                            }
                            // console.log(infoKegiatan.produkForms)
                        }} >
                            <option>choose</option>
                            <option>jam</option>
                            <option>hari</option>
                            <option>sesi</option>
                        </Form.Select>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId={`biaya-${index}`} className="mb-2">
                    <Form.Label>Biaya</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="biaya1">Rp</InputGroup.Text>
                        <Form.Control type="number" size='sm'
                            value={form.biaya}
                            onChange={(e) => handlePenawaranFormsChange(index, 'biaya', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Form.Group >
        ));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
    }


    return (
        <div className={Style.inputLetter}>
            <Form className={Style.formInputLetter} onSubmit={handleSubmit}>
                <Form.Group controlId="infromasiSurat" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Surat</p>
                    {
                        isUpload ? (<Form.Group controlId="nomor_surat" className="mb-2">
                            <Form.Label>Nomor Surat</Form.Label>
                            <Form.Control type="text" size='sm'
                                value={letterData.nomor_surat}
                                onChange={(e) => { setLetterData({ ...letterData, nomor_surat: e.target.value }) }}
                            />
                        </Form.Group>) : (
                            <Form.Group controlId="nomor_surat" className="mb-2">
                                <Form.Label>Nomor Surat <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*otomatis</span></Form.Label>
                                <Form.Control type="text" size='sm' readOnly
                                    value={letterData.nomor_surat}
                                />
                            </Form.Group>
                        )
                    }
                    <Form.Group controlId="namaPenerbit" className="mb-2">
                        <Form.Label>Nama Penerbit</Form.Label>
                        <Form.Control
                            placeholder='ex: Vonny Franciska Pinontoan'
                            type="text" size='sm'
                            value={letterData.nama_penerbit}
                            onChange={(e) => { setLetterData({ ...letterData, nama_penerbit: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group controlId="tanggalSurat" className="mb-2">
                        <Form.Label>Tanggal Surat</Form.Label>
                        <Form.Control type="date" size='sm'
                            onChange={(e) => { setLetterData({ ...letterData, tanggal_surat: formatDate(e.target.value) }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="subject" className="mb-2">
                        <Form.Label>Subject/Perihal</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={letterData.perihal}
                            onChange={(e) => { setLetterData({ ...letterData, perihal: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="mediaReferensi" className="mb-2">
                        <Form.Label>Media Referensi</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={letterData.media_ref}
                            onChange={(e) => { setLetterData({ ...letterData, media_ref: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="tanggalReferensi" className="mb-2">
                        <Form.Label>Tanggal Referensi</Form.Label>
                        <Form.Control type="date" size='md'
                            onChange={(e) => { setLetterData({ ...letterData, tanggal_ref: formatDate(e.target.value) }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="jenisPermohonan" className="mb-2">
                        <Form.Label>Jenis Permohonan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={letterData.jenis_permohonan}
                            onChange={(e) => { setLetterData({ ...letterData, jenis_permohonan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="catatan" className="mb-2">
                        <Form.Label>Catatan <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*optional</span></Form.Label>
                        <Form.Control as="textarea" size='sm' rows={3}
                            value={letterData.catatan}
                            onChange={(e) => { setLetterData({ ...letterData, catatan: e.target.value }) }}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiCustomer" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Customer</p>
                    <Form.Group controlId="namaTertuju" className="mb-2">
                        <Form.Label>Nama Tertuju</Form.Label>
                        <Form.Control type="text" size='sm'
                            placeholder='ex: Ibu Vonny Franciska Pinontoan'
                            value={letterData.nama_tertuju}
                            onChange={(e) => { setLetterData({ ...letterData, nama_tertuju: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="jabatan" className="mb-2">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={letterData.jabatan}
                            onChange={(e) => { setLetterData({ ...letterData, jabatan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPerusahaan" className="mb-2">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={letterData.nama_perusahaan}
                            onChange={(e) => { setLetterData({ ...letterData, nama_perusahaan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="alamatPerusahaan" className="mb-2">
                        <Form.Label>Alamat Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm'
                            value={letterData.alamat_perusahaan}
                            onChange={(e) => { setLetterData({ ...letterData, alamat_perusahaan: e.target.value }) }}
                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="informasiProduk" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                    <Form.Group controlId="kategoriProduk" className="mb-2">
                        <Form.Label>Kategori Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={letterData.category}
                            onChange={(e) => { setLetterData({ ...letterData, category: e.target.value }) }}
                        >
                            <option>Open this select menu</option>
                            {
                                Products.categories.map((cat) => (
                                    <option key={cat.code}>{cat.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="subCategory" className="mb-2">
                        <Form.Label>Jenis Sub-Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={letterData.sub_category}
                            onChange={(e) => { setLetterData({ ...letterData, sub_category: e.target.value }) }}
                        >
                            <option>Open this select menu</option>
                            {
                                Products.categories.find(cat => cat.name === letterData.category)?.subcategories.map((subCat, index) => (
                                    <option key={index}>{subCat.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    {/* Jumlah Produk */}
                    <Form.Group controlId="jumlahProduk" className="mb-2">
                        <Form.Label>Jumlah Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={letterData.jumlah_penawaran}
                            onChange={handleJumlahPenawaranChange}
                        >
                            {Array.from({ length: 10 }).map((_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="penawaran" className="mb-2">
                    {renderPenawaranForms()}
                </Form.Group>

                <Form.Group controlId="informasiTnC" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Term n Condition</p>
                    <Form.Group controlId="jumlahTnC" className="mb-2">
                        <Form.Label>Jumlah Term n Condition</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={letterData.jumlah_TNC}
                            onChange={handleJumlahTNCChange}
                        >
                            {Array.from({ length: 3 }).map((_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    {renderTNC()}
                </Form.Group>
                {
                    isUpload && (
                        <Form.Group controlId="upload" className="mb-2">
                            <p style={{ fontWeight: "bold" }}>Upload Dokumen</p>
                            <InputFile getData={setFile} />
                        </Form.Group>
                    )
                }
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit" className={Style.btnSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default InputOfferingLetter