import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'


import OfferingLetter from '../../../components/letter/offering-letter/letter_template/OfferingLetter'
import OfferingInputLetter from '../../../components/letter/offering-letter/input_letter/InputLetter'
import OfferingInputRevisi from '../../../components/letter/offering-letter/input_revisi/InputRevisi'

import ConfirmationLetter from "../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import ConfirmationInputLetter from "../../../components/letter/confirmation-letter/input_letter/InputLetter"
import ConfirmationInputRevisi from "../../../components/letter/confirmation-letter/input_revisi/InputRevisi"

import Style from "./editLetter.module.css"

const EditLetter = () => {
    const [templateOption, setTemplateOption] = useState("Produk saja")
    const { formattedLetterOption } = useParams();
    const letterOption = formattedLetterOption;

    return (
        <div className='container' style={{ paddingBottom: "50px" }}>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    {letterOption === 'confirmation-letter' && <ConfirmationLetter templateOption={templateOption} />}
                    {letterOption === 'offering-letter' && <OfferingLetter />}
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>EDIT LETTER</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        {letterOption === 'confirmation-letter' && (
                            <ConfirmationInputLetter templateOption={templateOption} setTemplateOption={setTemplateOption} />)}
                        {letterOption === 'offering-letter' && <OfferingInputLetter />}
                    </div>
                </div>
                <div style={{ width: "26%" }}>
                    <div className={Style.title}>
                        <h4>INPUT REVISI</h4>
                    </div>
                    <div className={Style.inputRevisi}>
                        {letterOption === 'confirmation-letter' && <ConfirmationInputRevisi />}
                        {letterOption === 'offering-letter' && <OfferingInputRevisi />}
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

export default EditLetter