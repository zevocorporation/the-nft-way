import React from 'react'

//Importing styles
import '../styles/patterns/header.scss'

//Importing components
import { Button, Link } from '../components/'

//Importing media assets
import logo from '../assets/images/logo.png'
import searchImg from '../assets/icons/search.svg'

const Header = () => {

    const renderLinks=(
        <div className="navbar">
            <Link >Buy</Link>
            <Link >Sell</Link>
            <Link >Catelogue</Link>
            <Link >Resources</Link>
            <Button>Connect Wallet</Button>
        </div>
    )

    const renderSearchInput=(
        <div className="search-input">
            <img src={searchImg} alt="search-img" />
            <input type="text" placeholder="search artifacts" />
        </div>
    )

    return (
        <div className="header">
           <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
           {renderSearchInput}
           {renderLinks}
        </div>
    )
}

export default Header
