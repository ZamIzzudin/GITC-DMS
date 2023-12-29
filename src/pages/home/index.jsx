import React from 'react'
import { useSelector } from 'react-redux'

import Dasboard from "../../components/dashboard"
import style from './home.module.css'

const Home = () => {
    const { auth = {} } = useSelector(states => states)

    return (
        <div className={style.homeWrapper}>
            <div className={`container ${style.homeContainer}`}>
                {
                    auth.role === 'Guest' ? (
                        <div className={style.home}>
                            <span className={style.welcome}>
                                SELAMAT DATANG DI SISTEM MANAJEMEN DOKUMEN VZE
                            </span>
                        </div>
                    ) : (
                        <div>
                            <Dasboard />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home