import React from 'react'
import { Form, Button } from 'react-bootstrap'

import Style from "./inputRevisi.module.css"

const InputRevisi = ({ inputRevisi, setInputRevisi, revisiLetter }) => {

    const handleRevisi = (e) => {
        e.preventDefault()
        revisiLetter()
    }

    const handleAddForm = () => {
        setInputRevisi([...inputRevisi, ''])
    }

    const handleInputChange = (e, index) => {
        const newFormInputs = [...inputRevisi];
        newFormInputs[index] = e.target.value;
        setInputRevisi(newFormInputs);
    }

    return (
        <div className={Style.inputRevisi}>
            <div className={Style.title}>
                <h4>INPUT REVISI</h4>
                <button className={Style.btnAdd} onClick={() => handleAddForm()}>+</button>
            </div>
            <p className={Style.term_revisi}>*revisi hanya berdasarkan yang ada pada form edit letter</p>
            <Form className={Style.formInputRevisi} onSubmit={handleRevisi}>
                {
                    inputRevisi.map((input, index) => (
                        <Form.Group controlId={`form${index + 1}`} className="mb-3" key={index}>
                            <Form.Control
                                as="textarea"
                                size='sm'
                                rows={1}
                                value={input}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </Form.Group>
                    ))
                }
                <div className={Style.btn_Wrapper}>
                    <Button type="submit" className={`text-bg-danger ${Style.btnSubmit}`}>
                        Revisi
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default InputRevisi














{/* <Form className={Style.formInputRevisi} onSubmit={handleRevisi}>
                <Form.Group controlId="template" className="mb-2" >
                    <Form.Label style={{ fontWeight: "bold" }}>Template Surat</Form.Label>
                    <Form.Control as="textarea" size='sm' rows={1}
                    // onChange={(e) => handleInputRevisi("[template]", e.target.value, 0)}
                    />
                </Form.Group>
                <Form.Group controlId="infromasiSurat" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Surat</p>
                    <Form.Group controlId="namaPenerbit" className="mb-2">
                        <Form.Label>Nama Penerbit</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        // onChange={(e) => handleInputRevisi("[nama penerbit]", e.target.value, 1)}
                        />
                    </Form.Group>
                    <Form.Group controlId="tanggalSurat" className="mb-2">
                        <Form.Label>Tanggal Surat</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        // onChange={(e) => handleInputRevisi("[tanggal surat]", e.target.value, 2)}
                        />
                    </Form.Group>
                    <Form.Group controlId="subject" className="mb-2">
                        <Form.Label>Subject/Perihal</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        // onChange={(e) => handleInputRevisi(`[perihal]: ${e.target.value}`, 4)}
                        />
                    </Form.Group>
                    <Form.Group controlId="mediaReferensi" className="mb-2">
                        <Form.Label>Media Referensi</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        // onChange={(e) => handleInputRevisi(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="tanggalReferensi" className="mb-2">
                        <Form.Label>Tanggal Referensi</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="jenisPermohonan" className="mb-2">
                        <Form.Label>Jenis Permohonan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="catatan" className="mb-2">
                        <Form.Label>Catatan <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*optional</span></Form.Label>
                        <Form.Control as="textarea" size='sm' rows={3}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiCustomer" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Customer</p>
                    <Form.Group controlId="namaTertuju" className="mb-2">
                        <Form.Label>Nama Tertuju</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="jabatan" className="mb-2">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPerusahaan" className="mb-2">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="alamatPerusahaan" className="mb-2">
                        <Form.Label>Alamat Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={2}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiProduk" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                    <Form.Group controlId="kategoriProduk" className="mb-2">
                        <Form.Label>Kategori Produk </Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="subkategori" className="mb-2">
                        <Form.Label>Jenis Sub-Produk</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                    <Form.Group controlId="jumlahProduk" className="mb-2">
                        <Form.Label>Jumlah Produk </Form.Label>
                        <Form.Control as="textarea" size='sm' rows={1}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiKegiatan" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Kegiatan</p>

                    <Form.Group controlId="kegiatan" className="mb-2">
                        <Form.Label>Tentang Kegiatan</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={10}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiTnC" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Term n Condition</p>
                    <Form.Group controlId="termNCondition" className="mb-2">
                        <Form.Label>Term n Condition</Form.Label>
                        <Form.Control as="textarea" size='sm' rows={2}
                        />
                    </Form.Group>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit" className={`text-bg-danger ${Style.btnSubmit}`}>
                        Revisi
                    </Button>
                </div>
            </Form> */}

// const handleInputRevisi = (prop, value) => {
//     setInputRevisi({
//         ...inputRevisi,
//         revisi: {
//             ...inputRevisi.revisi,
//             [prop]: value
//         }
//     });
// }
// const handleInputRevisi = (head, input, index) => {
//     const trimmedInput = input.trim();
//     const newRevisi = [...inputRevisi];
//     console.log(trimmedInput)
//     console.log(input)

//     if (trimmedInput !== undefined && trimmedInput.trim() !== null && trimmedInput !== "" && trimmedInput !== null) {
//         newRevisi[index] = `${head}: ${trimmedInput}`;
//         setInputRevisi(newRevisi);
//     } if (trimmedInput.trim() == null || trimmedInput == "") {
//         newRevisi[index] = undefined;
//     }
// }