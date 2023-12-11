import React from 'react'
import Profile from '../../assets/picture/user-solid.svg'
import { useSelector, useDispatch } from 'react-redux'
import { AsyncLogout } from '../../state/auth/middleware'

import { useNavigate, useLocation, useParams } from 'react-router-dom'

//test data dummy
import { dataUser } from '../../utils/DummyData'

import style from './header.module.css'

const Header = () => {
    const { auth = {} } = useSelector(states => states)
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const location = useLocation();
    //test split name
    const userData = dataUser.find(user => user.id === '1');
    const userName = userData ? userData.username.split(' ')[0] : '';
    const { typeLetterData } = useParams();

    function handleLogout() {
        navigate('/')
        dispatch(AsyncLogout())
    }

    return (
        <header>
            <div className={`container ${style.containerHeader}`}>
                <div className={style.navContainer}>
                    {/* <div className={style.profile} >
                        <img src={Profile} alt="Profile" className={`${style.imgProfile}`} />
                        <span className={style.profileName}>{userName}, {userData.role}</span>
                    </div> */}
                    <div className={style.profile} >
                        <img src={Profile} alt="Profile" className={`${style.imgProfile}`} />
                        <span className={style.profileName}>{auth.username}, {auth.role}</span>
                    </div>
                    <nav
                        className={` ${style.nav} ${location.pathname === "/" ? style.active : ""}`}
                        onClick={() => { navigate('/') }}>
                        Home
                    </nav>
                    <nav
                        className={`${style.nav} ${(location.pathname === "/status" || location.pathname === `/status/${typeLetterData}`) ? style.active : ""}`}
                        onClick={() => { navigate(`/status`) }}>
                        Status
                    </nav>
                    <nav className={`${style.nav} ${location.pathname === "/access" ? style.active : ""}`}
                        onClick={() => { navigate('/access') }}>
                        Access
                    </nav>
                </div>

                <button className={style.logout}
                    onClick={() => handleLogout()}
                >Logout</button>

            </div>
        </header >
    )
}

export default Header