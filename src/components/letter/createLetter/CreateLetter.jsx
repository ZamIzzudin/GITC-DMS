import React from 'react'

import Letter from '../letter/Letter'

import Style from './createLetter.module.css'


const CreateLetter = () => {
    return (
        <div className='container'>
            <div className={Style.CreateLetter}>
                <div className={Style.letterPreview}>
                    <Letter />
                </div>
                <div className={Style.inputLetter}>
                    Input Letter
                </div>
                <div className={Style.inputRevisi}>
                    Input Revisi
                </div>
            </div>
        </div>
    )
}

export default CreateLetter