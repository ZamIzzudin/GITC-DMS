import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import ConfirmationLetter from "../../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import ConfirmationInputLetter from "../../../../components/letter/confirmation-letter/input_letter/InputLetter"
import ConfirmationInputRevisi from "../../../../components/letter/confirmation-letter/input_revisi/InputRevisi"

import { dataConfirmationLetter } from '../../../../utils/DummyData';

import Style from "./editLetter.module.css"

const EditConfirmationLetter = () => {
    const { id } = useParams();
    const [dataCL, setDataCL] = useState(dataConfirmationLetter.find(item => item.id === id))
    const [templateOption, setTemplateOption] = useState("Produk saja")

    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    <ConfirmationLetter data={dataCL} />
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>EDIT LETTER</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        {/* <ConfirmationInputLetter templateOption={templateOption} setTemplateOption={setTemplateOption} /> */}
                    </div>
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>INPUT REVISI</h4>
                    </div>
                    <div className={Style.inputRevisi}>
                        {/* <ConfirmationInputRevisi /> */}
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="button" className={`text-bg-success ${Style.btnApprove}`}>
                    Approve
                </Button>
            </div>
        </div>
    )
}

export default EditConfirmationLetter