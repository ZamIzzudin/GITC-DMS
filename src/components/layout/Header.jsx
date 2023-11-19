import React from 'react'
import Profile from '../../assets/picture/user-solid.svg'
import { useNavigate, useLocation } from 'react-router-dom'

//test data dummy
import { dataUser } from '../../utils/DummyData'

import style from './header.module.css'

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    //test split name
    const userData = dataUser.find(user => user.id === '2');
    const userName = userData ? userData.username.split(' ')[0] : '';

    return (
        <header>
            <div className={`container ${style.containerHeader}`}>
                <div className={style.navContainer}>
                    <div className={style.profile} >
                        <img src={Profile} alt="Profile" className={`${style.imgProfile}`} />
                        <span className={style.profileName}>{userName}, {userData.role}</span>
                    </div>
                    <nav
                        className={` ${style.nav} ${location.pathname === "/home" ? style.active : ""}`}
                        onClick={() => { navigate('/home') }}>
                        Home
                    </nav>
                    <nav
                        className={`${style.nav} ${location.pathname === "/status" ? style.active : ""}`}
                        onClick={() => { navigate('/status') }}>
                        Status
                    </nav>
                    <nav className={`${style.nav} ${location.pathname === "/access" ? style.active : ""}`}
                        onClick={() => { navigate('/access') }}>
                        Access
                    </nav>
                </div>

                <button className={style.logout}
                    onClick={() => { navigate('/') }}
                >Logout</button>

            </div>
        </header >
    )
}

export default Header