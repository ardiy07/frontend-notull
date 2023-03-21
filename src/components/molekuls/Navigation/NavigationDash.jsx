import React from 'react'
import { NavLink } from 'react-router-dom'
import { DropDownProf, Notif } from '../../atoms'

const NavigationDash = () => {
    return (
        <div className="navbar container ">
            <div className="flex-1">
                <NavLink to='/s/dashboard' className="normal-case text-xl font-bold px-5 text-white">Q</NavLink>
            </div>
            <div className="flex-none">
                <Notif />
                <DropDownProf />
            </div>
        </div>

    )
}

export default NavigationDash