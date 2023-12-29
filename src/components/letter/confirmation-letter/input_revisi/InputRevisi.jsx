import React from 'react'
import { Form, Button } from 'react-bootstrap'

import Style from "./inputRevisi.module.css"

const InputRevisi = ({ inputRevisi, setInputRevisi, revisiLetter }) => {

    // const { auth = {} } = useSelector(states => states)

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

