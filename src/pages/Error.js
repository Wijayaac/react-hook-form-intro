import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>Uh oh! feeling lost ?</h1>
            <NavLink to='/'>
                Back to homepage
            </NavLink>
        </div>
    )
}

export default Error