import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

import { dataCL } from '../../../utils/DummyData';

import style from './tableLetter.module.css'

const TableLetter = () => {
    const [data, setData] = useState([])
    const [letterOption, setLetterOption] = useState("Confirmation Letter")
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [dropdown, setDropdown] = useState(false);

    const navigate = useNavigate();

    // const [selectedData, setSelectedData] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUploadForm, setShowUploadForm] = useState(false);


    const letter = ["Confirmation Letter", "Offering Letter"];

    //letter option
    const handleOptionClick = (option) => {
        setLetterOption(option);
        setDropdown(false);
    };

    //getDataCL
    useEffect(() => {
        setData(dataCL);
        initFilters();
    }, [])

    const handleCreateClick = () => {
        letterOption === "Confirmation Letter"
            ? navigate(`/create/confirmation-letter`)
            : letterOption === "Offering Letter"
                ? navigate(`/create/offering-letter`)
                : null;
    };

    const handleViewClick = () => {
        letterOption === "Confirmation Letter"
            ? navigate(`/view/confirmation-letter`)
            : letterOption === "Offering Letter"
                ? navigate(`/view/offering-letter`)
                : null;
    };



    const handleEditClick = () => {
        navigate(`/edit/${formattedLetterOption}`);
    };


    const handleNavigate = () => {
        // const bundle = {
        //     _id,
        //     profilePic,
        //     name,
        //     username,
        //     description,
        //     imageSrc,
        //     category,
        // };
        // localStorage.setItem("postData", JSON.stringify(bundle));
        // navigate(`/update-post/${_id}`);
    };


    //onChange Global Filter
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        setGlobalFilterValue(value);
        setTimeout(() => {
            let _filters = { ...filters };
            _filters["global"].value = value;
            setFilters(_filters);
        }, 500);
    };

    //action global filter in library primeReact
    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS }
        });
        setGlobalFilterValue("");
    };

    //column template in library primeReact
    //header template in library primeReact
    const renderHeader = () => {
        return (
            <div className={style.header}>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <span className={style.letterName}>{letterOption.toUpperCase()}</span>
                    <div>
                        <i
                            onClick={() => { setDropdown(!dropdown) }}
                            className={`pi ${dropdown ? 'pi-chevron-up' : 'pi-chevron-down'}`}
                            style={{ cursor: "pointer" }}
                        />
                        {
                            dropdown === true && (
                                <div className={style.dropdown}>
                                    {letter.map((option) => (
                                        <span
                                            key={option}
                                            style={{ padding: "15px", cursor: "pointer" }}
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option}
                                        </span>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "30px", }}>
                    <button className={`btn`} style={{ backgroundColor: "#9D9D9D" }}
                        onClick={() => {
                            setShowUploadForm(true);
                        }}
                    >Upload</button>
                    <button className={`btn`} style={{ backgroundColor: "#164391" }}
                        onClick={handleCreateClick
                            //     () => {
                            //     return (<CreateLetter letterOption={letterOption} />)
                            //     navigate('/status/create-letter')
                            // }
                        }
                    >Create</button>
                    <span className="p-input-icon-left " style={{ display: "flex", justifyContent: "center" }}>
                        <i className="pi pi-search" />
                        <InputText
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            placeholder="Keyword Search"
                            style={{ display: "flex", justifyContent: "center" }}
                        />
                    </span>
                </div>
            </div>
        );
    };

    //status column template in library primeReact
    const statusBodyTemplate = (rowData) => {
        switch (rowData.status) {
            case "done":
                return <span className='status text-bg-light'>DONE!</span>;
            case "disetujui":
                return <span className='status text-bg-success'>Disetujui</span>;
            case "belum disetujui":
                return <span className='status text-bg-warning'>Belum disetujui</span>;
            case "revisi":
                return <span className='status text-bg-danger'>Revisi</span>;
            default:
                return null;
        }
    }

    //upload column template in library primeReact
    const uploadScanBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {
                    rowData.status === "done" ? (
                        <i className="pi pi-eye" style={{ cursor: "pointer" }} />)
                        : rowData.status === "disetujui" ?
                            (<i className="pi pi-upload" style={{ cursor: "pointer" }} />)
                            : (<span>-</span>)
                }
            </React.Fragment>
        )
    }

    //document column template in library primeReact
    const documentBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {
                    rowData.status === "belum disetujui" || rowData.status === "revisi" ? (
                        <i className="pi pi-file-edit" style={{ cursor: "pointer" }}
                            onClick={() => { navigate(`/edit/${formattedLetterOption}`) }}
                        />)
                        : rowData.dokumen === null ?
                            (<span>-</span>)
                            :
                            (<i className="pi pi-file" style={{ cursor: "pointer" }}
                                onClick={handleViewClick}
                            />)

                }
            </React.Fragment>
        )
    }

    return (
        <div>
            <div className={style.tableLetter}>
                <DataTable
                    value={data}

                    showGridlines
                    removableSort
                    scrollable scrollHeight="650px" sortField="tanggal" sortOrder={-1}
                    paginator rows={10} rowsPerPageOptions={[10, 25, 50]}
                    tableStyle={{ minWidth: '50rem', borderRight: " 1px solid #e9ecef", borderLeft: " 1px solid #e9ecef" }}
                    dataKey="id"
                    id='id'
                    header={renderHeader()}
                    filters={filters} globalFilterFields={['id', 'nama_dokumen', 'tanggal', 'customer', 'dokumen', 'status']}
                >
                    <Column field="id" header="No" headerStyle={{ borderBottom: "1px solid #000", display: "flex", justifyContent: "center" }} body={(data, e) => e.rowIndex + 1} style={{ textAlign: "center" }} />
                    <Column field="nama_dokumen" header="Nama" sortable headerStyle={{ borderBottom: "1px solid #000", }} />
                    <Column field="tanggal" header="Tanggal" sortable headerStyle={{ borderBottom: "1px solid #000" }} />
                    <Column field="customer" header="Customer" sortable headerStyle={{ borderBottom: "1px solid #000" }} />
                    <Column field="status" header="Status" sortable headerStyle={{ borderBottom: "1px solid #000" }} body={statusBodyTemplate} />
                    <Column header="" headerStyle={{ borderBottom: "1px solid #000" }} body={uploadScanBodyTemplate} style={{ textAlign: "center" }} />
                    <Column field="dokumen" header="Doc" headerStyle={{ borderBottom: "1px solid #000", display: "flex", justifyContent: "center" }} body={documentBodyTemplate} style={{ textAlign: "center" }} />
                </DataTable>

                {/* {
                    showCreateForm && (
                        <ModalCreateLetter
                            letterOption={letterOption}
                            showCreateForm={showCreateForm}
                            setShowCreateForm={setShowCreateForm}
                        />
                    )
                }
                {
                    showUploadForm && (
                        <ModalUploadLetter
                            letterOption={letterOption}
                            showUploadForm={showUploadForm}
                            setShowUploadForm={setShowUploadForm}
                        />
                    )
                } */}
            </div>
        </div>
    )
}

export default TableLetter