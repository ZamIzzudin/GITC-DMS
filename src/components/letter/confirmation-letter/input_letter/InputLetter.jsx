import React from 'react'
import { useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

import { formatDate, formatDateToLetterNumber } from '../../../tools/FormatDate'
import { formatCurrency } from '../../../tools/FormatCurrency'
import Products from "../../../../utils/Product.json"

import Style from "./inputLetter.module.css"

//Catatan: Sisa nomor surat

const InputLetter = ({ letterData, setLetterData }) => {

    const [totalBiayaPerKegiatan, setTotalBiayaPerKegiatan] = useState([]);
    const [totalBiayaMealsPerKegiatan, seTotalBiayaMealsPerKegiatan] = useState([]);
    const [typeDurasi, setTypeDurasi] = useState([]);
    const [inputDurasi, setInputDurasi] = useState('');
    const [totalBiaya, setTotalBiaya] = useState('');

    const {
        template_option,
        nomor_surat,
        nama_penerbit,
        tanggal_surat,
        perihal,
        media_ref,
        tanggal_ref,
        jenis_permohonan,
        catatan,
        nama_tertuju,
        jabatan,
        nama_perusahaan,
        alamat_perusahaan,
        category,
        sub_category,
        jumlah_produk,
        produk_forms,
        total_biaya,
        jumlah_TNC,
        TNC
    } = letterData;

    const productCode = Products.categories.find((cat) => cat.name === category)
        ?.subcategories.find((subCat) => subCat.name === sub_category)?.code

    const dateLetter = formatDateToLetterNumber(tanggal_surat)

    useEffect(() => {
        if (tanggal_surat && productCode) {
            setLetterData({ ...letterData, nomor_surat: `CL${productCode}-20015-${dateLetter}` });
        }
    }, [nomor_surat, productCode, dateLetter])

    const calculateTotalBiayaKegiatan = (newForms) => {
        const totalBiayaKegiatan = newForms.map((data, index) => {
            let totalBiaya = 0;

            if (template_option === "Produk saja") {
                totalBiaya = data.biaya * data.kurs_USD * data.jumlah_peserta * parseInt(data.durasi.split(' ')[0], 10);
            } else if (template_option === "Produk + Meals") {
                totalBiaya = ((data.biaya * data.kurs_USD * data.jumlah_peserta * parseInt(data.durasi.split(' ')[0], 10)) + data.total_biaya_meals);
            } else if (template_option === "Produk - Meals") {
                totalBiaya = ((data.biaya * data.kurs_USD * data.jumlah_peserta * parseInt(data.durasi.split(' ')[0], 10)) - data.total_biaya_meals);
            }
            return totalBiaya;
        });
        setTotalBiayaPerKegiatan(totalBiayaKegiatan);
    };

    const calculateTotalBiayaMeals = (newForms) => {
        const totalBiayaMeals = newForms.map((data) => {
            let totalBiaya = 0;

            if (template_option === "Produk + Meals" || template_option === "Produk - Meals") {
                totalBiaya = data.biaya_meal * data.kurs_USD * data.jumlah_peserta
            } else {
                totalBiaya;
            }
            return totalBiaya;
        });

        seTotalBiayaMealsPerKegiatan(totalBiayaMeals)
    };

    const calculateTotalBiaya = (newForms) => {
        const totalBiaya = newForms.reduce((acc, data) => {
            const HitungTotalBiaya = acc + data.total_biaya_kegiatan

            return HitungTotalBiaya;
        }, 0);

        setTotalBiaya(totalBiaya)
    };

    useEffect(() => {
        setLetterData((prevLetterData) => {
            const newForms = prevLetterData.produk_forms.map((form, index) => {
                return {
                    ...form,
                    total_biaya_meals: totalBiayaMealsPerKegiatan[index],
                    total_biaya_kegiatan: totalBiayaPerKegiatan[index]
                };
            });


            return {
                ...prevLetterData,
                produk_forms: newForms,
                total_biaya: totalBiaya
            };
        });
    }, [totalBiayaPerKegiatan, setLetterData, totalBiayaMealsPerKegiatan, totalBiaya]);

    const handleProdukFormsChange = (index, prop, value) => {
        setLetterData((prevLetterData) => {
            const newForms = [...prevLetterData.produk_forms];
            newForms[index][prop] = value;

            calculateTotalBiayaMeals(newForms);
            calculateTotalBiayaKegiatan(newForms);
            calculateTotalBiayaKegiatan(newForms);
            calculateTotalBiaya(newForms);

            return {
                ...prevLetterData,
                produk_forms: newForms,
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

    const handleJumlahProdukChange = (e) => {
        const newValue = parseInt(e.target.value, 10 || 1);
        setLetterData((prevLetterData) => ({
            ...prevLetterData,
            jumlah_produk: newValue,
            produk_forms: Array.from({ length: newValue }, (_, index) => prevLetterData.produk_forms[index] || {
                jenis_kegiatan: '',
                tanggal_kegiatan: '',
                jumlah_peserta: '',
                biaya_meal: '',
                kurs_USD: '',
                biaya: '',
                total_biaya_meals: "",
                total_biaya_kegiatan: "",
                durasi: '',
            }),
        }));
    };

    console.log(letterData)

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

    const renderProdukForms = () => {
        return letterData.produk_forms.map((form, index) => (
            <Form.Group key={index} controlId="kegiatan" className="mb-2">
                <p style={{ fontWeight: "bold" }}>Kegiatan ke-{index + 1}</p>
                <Form.Group controlId={`jenisKegiatan-${index}`} className="mb-2">
                    <Form.Label>Jenis Kegiatan</Form.Label>
                    <Form.Control type="text" size='md'
                        value={form.jenisKegiatan}
                        onChange={(e) => handleProdukFormsChange(index, 'jenis_kegiatan', e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={`tanggalKegiatan-${index}`} className="mb-2">
                    <Form.Label>Tanggal Kegiatan</Form.Label>
                    <Form.Control type="date" size='md'
                        onChange={(e) => handleProdukFormsChange(index, 'tanggal_kegiatan', formatDate(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId={`jumlahPeserta-${index}`} className="mb-2">
                    <Form.Label>Jumlah Peserta</Form.Label>
                    <Form.Control type="number" size='md'
                        value={form.jumlahPeserta}
                        onChange={(e) => handleProdukFormsChange(index, 'jumlah_peserta', e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId={`durasi-${index}`} className="mb-2">
                    <Form.Label>Durasi</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control controlId={`jumlah durasi - ${index} `} type="number" size='sm'
                            onChange={(e) => {
                                // console.log(e.target.value, index);
                                setInputDurasi(e.target.value)
                                const input = e.target.value;
                                if (input) {
                                    handleProdukFormsChange(index, 'durasi', input + ' ' + typeDurasi[index]);
                                }
                                // console.log(LetterData.produkForms)
                            }
                            }
                        />
                        <Form.Select controlId={`waktu durasi - -${index}`}
                            onChange={(e) => {
                                handleDurasiChange(index, e.target.value)
                                const input = e.target.value;
                                if (input) {
                                    handleProdukFormsChange(index, 'durasi', inputDurasi + ' ' + input);
                                }
                                // console.log(LetterData.produkForms)
                            }} >
                            <option>choose</option>
                            <option>jam</option>
                            <option>hari</option>
                            <option>sesi</option>
                        </Form.Select>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId={`kursUSD-${index}`} className="mb-2" >
                    <Form.Label>Kurs USD</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                        <Form.Control type="number" size='sm'
                            value={form.kurs_USD}
                            onChange={(e) => handleProdukFormsChange(index, 'kurs_USD', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group >

                {
                    template_option !== "Produk saja" && (
                        <Form.Group controlId={`biayaMeal-${index}`} className="mb-2">
                            <Form.Label>Biaya Meal</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">USD</InputGroup.Text>
                                <Form.Control type="number" size='sm'
                                    value={form.biaya_meal}
                                    onChange={(e) => handleProdukFormsChange(index, 'biaya_meal', e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                    )
                }

                <Form.Group controlId={`biaya-${index}`} className="mb-2">
                    <Form.Label>Biaya</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">USD</InputGroup.Text>
                        <Form.Control type="number" size='sm'
                            value={form.biaya}
                            onChange={(e) => handleProdukFormsChange(index, 'biaya', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Form.Group >
        ));
    }

    return (
        <div className={Style.inputLetter}>
            {/* <p>Nilai yang dipilih: {template_option}</p> */}
            <Form className={Style.formInputLetter}>
                <Form.Group controlId="template" className="mb-2" >
                    <Form.Label style={{ fontWeight: "bold" }}>Pilih Template Surat</Form.Label>
                    <Form.Select value={template_option} onChange={(e) => { setLetterData({ ...letterData, template_option: e.target.value }) }}>
                        <option>Produk saja</option>
                        <option>Produk + Meals</option>
                        <option>Produk - Meals</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="infromasiSurat" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Surat</p>
                    <Form.Group controlId="nomor_surat" className="mb-2">
                        <Form.Label>Nomor Surat <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*otomatis</span></Form.Label>
                        <Form.Control type="text" size='sm' readOnly
                            value={nomor_surat}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPenerbit" className="mb-2">
                        <Form.Label>Nama Penerbit</Form.Label>
                        <Form.Control
                            placeholder='ex: Vonny Franciska Pinontoan'
                            type="text" size='sm'
                            value={nama_penerbit}
                            onChange={(e) => { setLetterData({ ...letterData, nama_penerbit: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group controlId="tanggal_surat" className="mb-2">
                        <Form.Label>Tanggal Surat</Form.Label>
                        <Form.Control type="date" size='sm'
                            onChange={(e) => { setLetterData({ ...letterData, tanggal_surat: formatDate(e.target.value) }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="subject" className="mb-2">
                        <Form.Label>Subject/Perihal</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={perihal}
                            onChange={(e) => { setLetterData({ ...letterData, perihal: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="mediaReferensi" className="mb-2">
                        <Form.Label>Media Referensi</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={media_ref}
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
                            value={jenis_permohonan}
                            onChange={(e) => { setLetterData({ ...letterData, jenis_permohonan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="catatan" className="mb-2">
                        <Form.Label>Catatan <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*optional</span></Form.Label>
                        <Form.Control as="textarea" size='sm' rows={3}
                            value={catatan}
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
                            value={nama_tertuju}
                            onChange={(e) => { setLetterData({ ...letterData, nama_tertuju: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="jabatan" className="mb-2">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={jabatan}
                            onChange={(e) => { setLetterData({ ...letterData, jabatan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPerusahaan" className="mb-2">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={nama_perusahaan}
                            onChange={(e) => { setLetterData({ ...letterData, nama_perusahaan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="alamatPerusahaan" className="mb-2">
                        <Form.Label>Alamat Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm'
                            value={alamat_perusahaan}
                            onChange={(e) => { setLetterData({ ...letterData, alamat_perusahaan: e.target.value }) }}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiProduk" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                    <Form.Group controlId="kategoriProduk" className="mb-2">
                        <Form.Label>Kategori Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={category}
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
                            value={sub_category}
                            onChange={(e) => { setLetterData({ ...letterData, sub_category: e.target.value }) }}
                        >
                            <option>Open this select menu</option>
                            {
                                Products.categories.find(cat => cat.name === category)?.subcategories.map((subCat, index) => (
                                    <option key={index}>{subCat.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    {/* Jumlah Produk */}
                    <Form.Group controlId="jumlahProduk" className="mb-2">
                        <Form.Label>Jumlah Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={jumlah_produk}
                            onChange={handleJumlahProdukChange}
                        >
                            {Array.from({ length: 10 }).map((_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="informasiKegiatan" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Kegiatan</p>
                    {renderProdukForms()}
                </Form.Group>
                <Form.Group controlId="informasiTnC" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Term n Condition</p>
                    <Form.Group controlId="jumlahTnC" className="mb-2">
                        <Form.Label>Jumlah Term n Condition</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={jumlah_TNC}
                            onChange={handleJumlahTNCChange}
                        >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    {renderTNC()}
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