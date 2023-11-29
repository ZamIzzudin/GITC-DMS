import React from 'react'
import { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

import { dataDashboard } from '../../../utils/DummyData';
import { formatCurrency } from '../../tools/FormatCurrency'

import style from "./tableDashboard.module.css"

const TableDashboad = () => {
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [filters, setFilters] = useState(null);

    useEffect(() => {
        initFilters();
    }, [])

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        setGlobalFilterValue(value);
        setTimeout(() => {
            let _filters = { ...filters };
            _filters["global"].value = value;
            setFilters(_filters);
        }, 500);
    };
    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS }
        });
        setGlobalFilterValue("");
    };

    const renderHeader = () => {
        return (
            <div className={style.header}>
                <div style={{ display: "flex", alignItems: "center", gap: "30px", }}>
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
    return (
        <div>
            <div>
                <DataTable
                    value={dataDashboard}
                    showGridlines
                    className={style.tableDashboard}
                    removableSort
                    scrollable scrollHeight="650px" sortField="tanggal" sortOrder={-1}
                    paginator rows={10} rowsPerPageOptions={[10, 25, 50]}
                    tableStyle={{ minWidth: '50rem', borderRight: " 1px solid #e9ecef", borderLeft: " 1px solid #e9ecef" }}
                    dataKey="id"
                    id='id'
                    header={renderHeader()}
                    filters={filters}
                    globalFilterFields={['id', 'sub_category', 'category', 'jumlah_produk', 'total_biaya']}
                >
                    <Column field="id" header="No" headerStyle={{ borderBottom: "1px solid #000", display: "flex", justifyContent: "center" }} body={(data, e) => e.rowIndex + 1} style={{ textAlign: "center" }} />
                    <Column field="sub_category" header="Nama Produk" sortable headerStyle={{ borderBottom: "1px solid #000", }} />
                    <Column field="category" header="Kategori Produk" sortable headerStyle={{ borderBottom: "1px solid #000" }} />
                    <Column field="jumlah_produk" header="Unit Terproduksi" sortable headerStyle={{ borderBottom: "1px solid #000" }} />
                    <Column field="total_biaya" header="Revenue" sortable headerStyle={{ borderBottom: "1px solid #000" }} body={(rowData) => formatCurrency(rowData.total_biaya)} />
                </DataTable>
            </div>
        </div>
    )
}

export default TableDashboad