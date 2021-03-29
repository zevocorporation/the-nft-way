import React from 'react'

//Importing styles
import '../styles/patterns/footer.scss'

//Importing components
import { Link, Icon } from '../components/'

//Importing media assets
import logo from '../assets/images/logo.png'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

const Footer = () => {
    
    const renderFooter=(
        <div className="footer-one">
           <div className="block-left">
                <img src={logo} alt="logo" className="footer-logo" />
                <nav>
                    <Link><Icon src={facebook} alt="facebook" /></Link>
                    <Link><Icon src={linkedin} alt="linkedin" /></Link>
                    <Link><Icon src={youtube} alt="youtube" /></Link>
                    <Link><Icon src={instagram} alt="instagram" /></Link>
                </nav>
           </div>
           <div className="block-right">
               <Link>Terms of service</Link>
               <Link>Privacy</Link>
               <Link>Resource center</Link>
           </div>
        </div>
    )
    return (
        <div className="footer">
            {renderFooter}
        </div>
    )
}

export default Footer
