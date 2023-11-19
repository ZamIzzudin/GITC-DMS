import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


import OfferingLetter from '../../../components/letter/offering-letter/letter_template/OfferingLetter'
import OfferingInputLetter from '../../../components/letter/offering-letter/input_letter/InputLetter'
// import OfferingInputRevisi from '../../../components/letter/offering-letter/input_revisi/InputRevisi'

import ConfirmationLetter from "../../../components/letter/confirmation-letter/letter_template/ConfirmationLetter"
import ConfirmationInputLetter from "../../../components/letter/confirmation-letter/input_letter/InputLetter"
// import ConfirmationInputRevisi from "../../../components/letter/confirmation-letter/input_revisi/InputRevisi"

import Style from './createLetter.module.css'

const CreateLetter = () => {
    const [templateOption, setTemplateOption] = useState("Produk saja")


    const { formattedLetterOption } = useParams();
    const letterOption = formattedLetterOption;

    return (

        <div className='container'>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    {
                        letterOption === "confirmation-letter" ? (
                            <ConfirmationLetter
                                templateOption={templateOption}
                            />
                        ) : (
                            letterOption === "offering-letter" ? (
                                <OfferingLetter />
                            ) : null
                        )
                    }
                </div>
                <div style={{ width: "30%" }}>
                    <div className={Style.title}>
                        <h4>CREATE LETTER</h4>
                    </div>
                    <div className={Style.inputLetter}>
                        {
                            letterOption === "confirmation-letter" ? (
                                <ConfirmationInputLetter
                                    templateOption={templateOption}
                                    setTemplateOption={setTemplateOption} />
                            ) : (
                                letterOption === "offering-letter" ? (
                                    <OfferingInputLetter />
                                ) : null
                            )
                        }
                    </div>
                </div>
                {/* <div className={Style.inputRevisi}>
                    <OfferingInputRevisi />
                </div> */}
            </div>
        </div>
    )
}

export default CreateLetter