import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import style from "./login.module.css"

import Logo from "../../assets/picture/Logo Garuda.svg"

const Login = () => {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "#EAF8FF", height: "100vh" }}>
            <div className={`container ${style.loginContainer}`} >
                <div className={style.loginForm}>
                    <img src={Logo} alt="Garuda" className={style.logo} />
                    <span className={style.text}>SELAMAT DATANG</span>
                    <Form className={style.formInput}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                        >
                            <Form.Control
                                type="text"
                                // style={{ fontSize: '12px' }}
                                placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            // style={{ fontSize: '12px' }}
                            />
                        </FloatingLabel>
                        <Button
                            as="input"
                            type="button"
                            value="Log in"
                            className={style.btnLogin}
                            onClick={() => { navigate('/home') }}
                        />
                    </Form>
                </div>
            </div>
        </div >
    )
}

export default Login