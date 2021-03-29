import React from 'react'
import Card from '../patterns/card'

//Importing styles
import '../styles/screens/home.scss'

const Home = () => {

    const renderHeader=(
        <div className="title-header">
            <div>
               <p style={{fontSize:16}}><b>Live Auctions</b></p>
               <p 
                    style={{fontSize:14}}
                >
                   Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit. Nunc maecenas maecenas 
                   semper non praesent ut. 
                </p>
            </div>
            <p>View all live auctions</p>
        </div>
    )

    const renderCraft=(
        <div className="craft">
            <h2>
                We are building the new creative economy 
                for the next billion users of internet
            </h2>
            <p>
                We’re bringing digital creators, crypto natives, 
                and collectors together to move culture forward.
            </p>
        </div>
    )

    const renderCard=(
        <div className="card-container">
            <Card />
        </div>
    )

    return (
        <div className="home">
            {renderHeader}
            {renderCard}
            {renderCraft}
        </div>
    )
}

export default Home
