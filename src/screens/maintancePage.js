import React from 'react'

//Importing media assets
import maintance from '../assets/images/maintance.svg'

const MaintancePage = () => {

    const Styles = {
        grid:{
            marginTop:'5%',
            display:'grid',
            placeItems:'center',
            gridGap:'2em'
        },
        image:{
            margin:'0 auto'
        },
        title:{
            textAlign:'center',
            margin:'0 auto'
        },
        text:{
            textAlign:'center',
            margin:'0 auto'
        }
    }

    return (
        <div style={Styles.grid} >
            <img  src={maintance} alt="maintance page" style={Styles.image} />
            <h3 style={Styles.title}>Its not you. Its us</h3>
            <p style={Styles.text}>
                Unfortunately we are down for a 
                maintainance right now. We will 
                be online as soon as possible. 
                Please check again in a little while.
            </p>
        </div>
    )
}

export default MaintancePage
