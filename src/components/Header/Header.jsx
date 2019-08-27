import React from 'react'
import logo from '../../assets/HubblefyLogo.png'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => 
        <header>
            <Link to="/">
                <img src={logo} alt="Hubblefy Logo"/>
            </Link>
        </header>

export default Header