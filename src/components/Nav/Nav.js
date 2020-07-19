import React from 'react'
import './nav.scss'
import {NavLink} from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className={'nav'}>
            <div className={'navItem'}>
                <NavLink to={'/'} className={'navText'}>Home</NavLink>
            </div>
            <div className={'navItem'}>
                <NavLink to={'/info'} className={'navText'}>Info</NavLink>
            </div>
            <div className={'navItem'}>
                <NavLink to={'/contacts'} className={'navText'}>Contacts</NavLink>
            </div>
        </nav>
    )
}