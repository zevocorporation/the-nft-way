import React,{ useState } from 'react'

//Importing styles
import '../styles/patterns/header.scss'

//Importing components
import { Button, Link } from '../components/'

//Importing media assets
import logo from '../assets/images/logo.png'
import searchImg from '../assets/icons/search.svg'
import menu from '../assets/icons/menu.svg'

import web3 from 'web3'

const Header = () => {

    //  const connect = async () => {
    //     if (window.ethereum) {
    //       window.web3 = new Web3(window.ethereum);
    //       window.ethereum.enable();
    //       const accounts = await window.ethereum.request({
    //         method: "eth_accounts",
    //       });
    
    //       updatedAddress(accounts[0]);
    //       //console.log(accounts[0]);
    //       let address = accounts[0];
    //       console.log(value1);
    //       console.log("add", address);
    
    //       //  await loadContract()
    //       //    console.log('after load contract',value1);
    //       //   return true;
    //     }
    //     return false;
    //   };
    
    //   window.ethereum.on("accountsChanged", async function (accounts) {
    //     window.location.reload(true);
    //     await connect();
    
    //     console.log(accounts);
    //   });
    //  const [value1, updatedAddress] = useState("Not connected");

    const renderLinks=(
        <div className="navbar">
            <Link >Buy</Link>
            <Link >Sell</Link>
            <Link >Catelogue</Link>
            <Link >Resources</Link>
            <Button className="secondary">Connect Wallet</Button>
        </div>
    )

    const renderSearchInput=(
        <div className="search-input">
            <img src={searchImg} alt="search-img" />
            <input type="text" placeholder="search artifacts" />
        </div>
    )

    const renderTabHeader = (
        <div className="hamburger">
             <Button className="secondary">Connect Wallet</Button>
             <img src={menu} alt="menu" />
        </div>
    )

    return (
        <div className="header">
           <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
           {renderSearchInput}
           {renderLinks}
           {renderTabHeader}
        </div>
    )
}

export default Header
