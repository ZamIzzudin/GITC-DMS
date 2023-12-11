import React from 'react'
import { useState, useEffect } from "react";
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { AsyncLogin } from "../../state/auth/middleware";

import Loading from '../../components/tools/Loading';

import style from "./login.module.css"

import Logo from "../../assets/picture/Logo Garuda.svg"

const Login = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(states => states);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(AsyncLogin({ username, password }));
    }

    return (
        <div style={{ backgroundColor: "#EAF8FF", height: "100vh" }}>
            <Loading />
            <div className={`container ${style.loginContainer}`} >
                <div className={style.loginForm}>
                    <img src={Logo} alt="Garuda" className={style.logo} />
                    <span className={style.text}>SELAMAT DATANG</span>
                    <Form className={style.formInput} onSubmit={handleLogin}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                required
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </FloatingLabel>
                        <Button
                            as="input"
                            type="submit"
                            value="Log in"
                            className={style.btnLogin}
                            disabled={loading.status}
                        />
                    </Form>
                </div>
            </div>
        </div >
    )
}

export default Login