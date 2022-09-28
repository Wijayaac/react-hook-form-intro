import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './navbar.module.css'

const Navbar = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <li>
                    <NavLink to='/' end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add-student'>
                        Add
                    </NavLink>
                </li>
            </nav>
        </header>
    )
}

export default Navbar