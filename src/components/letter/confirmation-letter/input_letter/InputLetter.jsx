import React from 'react'
import { useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

import { formatDate, formatDateToLetterNumber } from '../../../tools/FormatDate'
import { formatCurrency } from '../../../tools/FormatCurrency'
import Products from "../../../../utils/Product.json"

import Style from "./inputLetter.module.css"

//Catatan: Sisa nomor surat

const InputLetter = ({ templateOption, setTemplateOption, letterInfo, setLetterInfo, customerInfo, setCustomerInfo, productInfo, setProductInfo, infoKegiatan, setInfoKegiatan, infoTNC, setInfoTNC
}) => {
    // Descturctering state
    const { nomorSurat, namaPenerbit, tanggalSurat, perihal, mediaRef, tanggalRef, jenisPermohonan, catatan } = letterInfo;

    const { namaTertuju, jabatan, namaPerusahaan, alamatPerusahaan } = customerInfo;

    const { category, subCategory } = productInfo;

    const { jumlahProduk, produkForms: [] } = infoKegiatan;

    const { jumlahTNC, TNC: [] } = infoTNC;

    const [totalBiayaPerKegiatan, setTotalBiayaPerKegiatan] = useState([]);
    const [totalBiayaMealsPerKegiatan, seTotalBiayaMealsPerKegiatan] = useState([]);
    const [typeDurasi, setTypeDurasi] = useState([]);
    const [inputDurasi, setInputDurasi] = useState('');
    const [totalBiaya, setTotalBiaya] = useState('');

    const productCode = Products.categories.find((cat) => cat.name === category)
        ?.subcategories.find((subCat) => subCat.name === subCategory)?.code

    const dateLetter = formatDateToLetterNumber(tanggalSurat)

    // console.log(tanggalSurat)
    useEffect(() => {
        if (tanggalSurat && productCode) {
            setLetterInfo({ ...letterInfo, nomorSurat: `CL${productCode}-20015-${dateLetter}` });
        }
    }, [nomorSurat, productCode, dateLetter])

    const calculateTotalBiayaKegiatan = (newForms) => {
        const totalBiayaKegiatan = newForms.map((data, index) => {
            let totalBiaya = 0;

            if (templateOption === "Produk saja") {
                totalBiaya = data.biaya * data.kursUSD * data.jumlahPeserta * parseInt(data.durasi.split(' ')[0], 10);
            } else if (templateOption === "Produk + Meals") {
                totalBiaya = ((data.biaya * data.kursUSD * data.jumlahPeserta * parseInt(data.durasi.split(' ')[0], 10)) + data.totalBiayaMeals);
            } else if (templateOption === "Produk - Meals") {
                totalBiaya = ((data.biaya * data.kursUSD * data.jumlahPeserta * parseInt(data.durasi.split(' ')[0], 10)) - data.totalBiayaMeals);
            }
            return totalBiaya;
        });
        setTotalBiayaPerKegiatan(totalBiayaKegiatan);
    };


    const calculateTotalBiayaMeals = (newForms) => {
        const totalBiayaMeals = newForms.map((data) => {
            let totalBiaya = 0;

            if (templateOption === "Produk + Meals" || templateOption === "Produk - Meals") {
                totalBiaya = data.biayaMeal * data.kursUSD * data.jumlahPeserta
            } else {
                totalBiaya;
            }
            return totalBiaya;
        });

        seTotalBiayaMealsPerKegiatan(totalBiayaMeals)
    };
    // console.log(`total meals ${totalBiayaMealsPerKegiatan}`)

    const calculateTotalBiaya = (newForms) => {
        const totalBiaya = newForms.reduce((acc, data) => {
            const HitungTotalBiaya = acc + data.totalBiayaKegiatan

            return HitungTotalBiaya;
        }, 0);

        setTotalBiaya(totalBiaya)
    };
    console.log(`total biaya ${formatCurrency(totalBiaya)}`)

    useEffect(() => {
        setInfoKegiatan((prevInfoKegiatan) => {
            const newForms = prevInfoKegiatan.produkForms.map((form, index) => {
                return {
                    ...form,
                    totalBiayaMeals: totalBiayaMealsPerKegiatan[index],
                    totalBiayaKegiatan: totalBiayaPerKegiatan[index]
                };
            });


            return {
                ...prevInfoKegiatan,
                produkForms: newForms,
                totalBiaya: totalBiaya
            };
        });
    }, [totalBiayaPerKegiatan, setInfoKegiatan, totalBiayaMealsPerKegiatan, totalBiaya]);

    const handleProdukFormsChange = (index, prop, value) => {
        setInfoKegiatan((prevInfoKegiatan) => {
            const newForms = [...prevInfoKegiatan.produkForms];
            newForms[index][prop] = value;

            calculateTotalBiayaMeals(newForms);
            calculateTotalBiayaKegiatan(newForms);
            calculateTotalBiayaKegiatan(newForms);
            calculateTotalBiaya(newForms);

            return {
                ...prevInfoKegiatan,
                produkForms: newForms,
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
        setInfoKegiatan((prevInfoKegiatan) => ({
            ...prevInfoKegiatan,
            jumlahProduk: newValue,
            produkForms: Array.from({ length: newValue }, (_, index) => prevInfoKegiatan.produkForms[index] || {
                jenisKegiatan: '',
                tanggalKegiatan: '',
                jumlahPeserta: '',
                biayaMeal: '',
                kursUSD: '',
                biaya: '',
                totalBiayaMeals: '',
                totalBiayaKegiatan: '',
                durasi: ''
            }),
        }));
    };

    // console.log(infoKegiatan.produkForms)
    // console.log(typeDurasi)

    const handleJumlahTNCChange = (e) => {
        const newValue = parseInt(e.target.value, 10 || 1);
        setInfoTNC((prevInfoTNC) => ({
            ...prevInfoTNC,
            jumlahTNC: newValue,
            TNC: Array.from({ length: newValue }, (_, index) => prevInfoTNC.TNC[index] || {
                detail: ''
            }),
        }));
    };

    const handleTNCChange = (index, prop, value) => {
        setInfoTNC((prevInfoTNC) => {
            const newForms = [...prevInfoTNC.TNC];
            newForms[index][prop] = value;
            return {
                ...prevInfoTNC,
                TNC: newForms,
            };
        });
    };

    const renderTNC = () => {
        return infoTNC.TNC.map((tnc, index) => (
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
        return infoKegiatan.produkForms.map((form, index) => (
            <Form.Group key={index} controlId="kegiatan" className="mb-2">
                <p style={{ fontWeight: "bold" }}>Kegiatan ke-{index + 1}</p>
                <Form.Group controlId={`jenisKegiatan-${index}`} className="mb-2">
                    <Form.Label>Jenis Kegiatan</Form.Label>
                    <Form.Control type="text" size='md'
                        value={form.jenisKegiatan}
                        onChange={(e) => handleProdukFormsChange(index, 'jenisKegiatan', e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={`tanggalKegiatan-${index}`} className="mb-2">
                    <Form.Label>Tanggal Kegiatan</Form.Label>
                    <Form.Control type="date" size='md'
                        onChange={(e) => handleProdukFormsChange(index, 'tanggalKegiatan', formatDate(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId={`jumlahPeserta-${index}`} className="mb-2">
                    <Form.Label>Jumlah Peserta</Form.Label>
                    <Form.Control type="number" size='md'
                        value={form.jumlahPeserta}
                        onChange={(e) => handleProdukFormsChange(index, 'jumlahPeserta', e.target.value)}
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
                                    handleProdukFormsChange(index, 'durasi', input + ' ' + typeDurasi[index]);
                                }
                                // console.log(infoKegiatan.produkForms)
                            }
                            }
                        />
                        <Form.Select onChange={(e) => {
                            handleDurasiChange(index, e.target.value)
                            const input = e.target.value;
                            if (input) {
                                handleProdukFormsChange(index, 'durasi', inputDurasi + ' ' + input);
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

                <Form.Group controlId={`kursUSD-${index}`} className="mb-2" >
                    <Form.Label>Kurs USD</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                        <Form.Control type="number" size='sm'
                            value={form.kursUSD}
                            onChange={(e) => handleProdukFormsChange(index, 'kursUSD', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group >

                {
                    templateOption !== "Produk saja" && (
                        <Form.Group controlId={`biayaMeal-${index}`} className="mb-2">
                            <Form.Label>Biaya Meal</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">USD</InputGroup.Text>
                                <Form.Control type="number" size='sm'
                                    value={form.biayaMeal}
                                    onChange={(e) => handleProdukFormsChange(index, 'biayaMeal', e.target.value)}
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
            {/* <p>Nilai yang dipilih: {templateOption}</p> */}
            <Form className={Style.formInputLetter}>
                <Form.Group controlId="template" className="mb-2" >
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
                        <Form.Label>Nomor Surat <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*otomatis</span></Form.Label>
                        <Form.Control type="text" size='sm' readOnly
                            value={nomorSurat}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPenerbit" className="mb-2">
                        <Form.Label>Nama Penerbit</Form.Label>
                        <Form.Control
                            placeholder='ex: Vonny Franciska Pinontoan'
                            type="text" size='sm'
                            value={namaPenerbit}
                            onChange={(e) => { setLetterInfo({ ...letterInfo, namaPenerbit: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group controlId="tanggalSurat" className="mb-2">
                        <Form.Label>Tanggal Surat</Form.Label>
                        <Form.Control type="date" size='sm'
                            onChange={(e) => { setLetterInfo({ ...letterInfo, tanggalSurat: formatDate(e.target.value) }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="subject" className="mb-2">
                        <Form.Label>Subject/Perihal</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={perihal}
                            onChange={(e) => { setLetterInfo({ ...letterInfo, perihal: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="mediaReferensi" className="mb-2">
                        <Form.Label>Media Referensi</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={mediaRef}
                            onChange={(e) => { setLetterInfo({ ...letterInfo, mediaRef: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="tanggalReferensi" className="mb-2">
                        <Form.Label>Tanggal Referensi</Form.Label>
                        <Form.Control type="date" size='md'
                            onChange={(e) => { setLetterInfo({ ...letterInfo, tanggalRef: formatDate(e.target.value) }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="jenisPermohonan" className="mb-2">
                        <Form.Label>Jenis Permohonan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={jenisPermohonan}
                            onChange={(e) => { setLetterInfo({ ...letterInfo, jenisPermohonan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="catatan" className="mb-2">
                        <Form.Label>Catatan <span style={{ fontSize: "12px", color: "#9D9D9D" }}>*optional</span></Form.Label>
                        <Form.Control as="textarea" size='sm' rows={3}
                            value={catatan}
                            onChange={(e) => { setLetterInfo({ ...letterInfo, catatan: e.target.value }) }}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiCustomer" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Customer</p>
                    <Form.Group controlId="namaTertuju" className="mb-2">
                        <Form.Label>Nama Tertuju</Form.Label>
                        <Form.Control type="text" size='sm'
                            placeholder='ex: Ibu Vonny Franciska Pinontoan'
                            value={namaTertuju}
                            onChange={(e) => { setCustomerInfo({ ...customerInfo, namaTertuju: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="jabatan" className="mb-2">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={jabatan}
                            onChange={(e) => { setCustomerInfo({ ...customerInfo, jabatan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="namaPerusahaan" className="mb-2">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control type="text" size='sm'
                            value={namaPerusahaan}
                            onChange={(e) => { setCustomerInfo({ ...customerInfo, namaPerusahaan: e.target.value }) }}
                        />
                    </Form.Group>
                    <Form.Group controlId="alamatPerusahaan" className="mb-2">
                        <Form.Label>Alamat Perusahaan</Form.Label>
                        <Form.Control as="textarea" size='sm'
                            value={alamatPerusahaan}
                            onChange={(e) => { setCustomerInfo({ ...customerInfo, alamatPerusahaan: e.target.value }) }}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="informasiProduk" className="mb-2">
                    <p style={{ fontWeight: "bold" }}>Informasi Produk</p>
                    <Form.Group controlId="kategoriProduk" className="mb-2">
                        <Form.Label>Kategori Produk</Form.Label>
                        <Form.Select aria-label="Default select example" size='md'
                            value={category}
                            onChange={(e) => { setProductInfo({ ...productInfo, category: e.target.value }) }}
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
                            value={subCategory}
                            onChange={(e) => { setProductInfo({ ...productInfo, subCategory: e.target.value }) }}
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
                            value={jumlahProduk}
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
                            value={jumlahTNC}
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