import React from 'react'
import { useState, useEffect } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import ModalEditAccess from '../../modal/access/ModalEditAccess';
import ModalDeleteAccess from '../../modal/access/ModalDeleteAccess';
import ModalAddAccess from '../../modal/access/ModalAddAccess';

import { dataUser } from '../../../utils/DummyData'

const TableAccess = () => {

    const [data, setData] = useState([])
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedData, setSelectedData] = useState([]);

    useEffect(() => {
        setData(dataUser)
    }, [data])

    //Column Template
    const actionBodyTemplate = (rowData) => {
        return (
            <div style={{ display: "flex", gap: "20px" }}>
                {rowData.role !== "super admin" && (
                    <React.Fragment>
                        <button className='btn-cta text-bg-success'
                            onClick={() => {
                                setShowEditForm(true);
                                setSelectedData(rowData)
                            }}
                        >Edit Profile</button>
                        <button className='btn-cta text-bg-danger'
                            onClick={() => {
                                setShowDeleteForm(true);
                                setSelectedData(rowData)
                            }}
                        >Remove</button>
                    </React.Fragment>
                )}
            </div>
        )
    }

    const headerBodyTemplate = () => {
        return (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "40px", marginLeft: "30px" }}>MANAGE ACCESS</span>
                <button className={`btn`} style={{ backgroundColor: "#164391", marginRight: "50px" }}
                    onClick={() => {
                        setShowAddForm(true);
                    }}
                >Add Access</button>
            </div>
        )
    }

    return (
        <div style={{ paddingTop: "30px" }}>
            {
                showAddForm && (
                    <ModalAddAccess
                        showAddForm={showAddForm}
                        setShowAddForm={setShowAddForm}
                    />
                )
            }
            {
                showEditForm && (
                    <ModalEditAccess
                        rowData={selectedData}
                        showEditForm={showEditForm}
                        setShowEditForm={setShowEditForm} />
                )
            }
            {
                showDeleteForm && (
                    <ModalDeleteAccess
                        rowData={selectedData}
                        showDeleteForm={showDeleteForm}
                        setShowDeleteForm={setShowDeleteForm}
                    />
                )
            }


            <DataTable
                value={data}
                showGridlines
                removableSort
                paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: '40rem', borderRight: " 1px solid #e9ecef", borderLeft: " 1px solid #e9ecef" }}
                dataKey="id"
                id='id'
                header={headerBodyTemplate}

            // style={{ paddingLeft: "100px", paddingRight: "100px" }}

            >
                <Column field="id" header="No" headerStyle={{ borderBottom: "1px solid #000", display: "flex", justifyContent: "center" }} body={(data, e) => e.rowIndex + 1} style={{ textAlign: "center" }} />
                <Column field="username" header="Nama" headerStyle={{ borderBottom: "1px solid #000" }} />
                <Column field="role" header="Authority" headerStyle={{ borderBottom: "1px solid #000" }} />
                <Column body={actionBodyTemplate} headerStyle={{ borderBottom: "1px solid #000" }} />
            </DataTable>
        </div>
    )
}

export default TableAccess