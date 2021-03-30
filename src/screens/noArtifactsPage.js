import React from 'react'

//Importing media assets
import noartifacts from '../assets/images/noartifacts.svg'
import { Button } from '../components'

const NoArtifactsPage = () => {

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
        text:{
            textAlign:'center',
            margin:'0 auto'
        }
    }

    return (
        <div style={Styles.grid} >
            <img  src={noartifacts} alt="No Artifacts page" style={Styles.image} />
            <p style={Styles.text}>
                Sorry! There are no artifacts for auction 
                now. We,re bringing digital creators, 
                crypto natives, and collectors together.
            </p>
            <Button className="primary">Sell your craft on theNFTway</Button>
        </div>
    )
}

export default NoArtifactsPage
