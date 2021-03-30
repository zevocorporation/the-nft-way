import React from 'react'

//Importing styles
import '../styles/screens/home.scss'

import Card from '../patterns/card'

import Cards from '../data/cards.json'

import Footer from '../patterns/footer'

//Importing components
import { Button } from '../components'
import Form from '../patterns/form'




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
            <Button className="primary">Sell your craft on Absolute NFT</Button>
        </div>
    )

    const renderCard=(
        <div className="card-container">
            {
                Cards.map((card,index) => {
                    return (
                        <Card 
                            key={index} 
                            createdBy={card.createdBy}
                            ownedBy={card.ownedBy}
                            title={card.title} 
                            eth={card.eth}
                            expires={card.expires}
                        />
                    )
                })
            }
        </div>
    )

    return (
        <>
        <div className="home">
            {renderHeader}
            {renderCard}
            {renderCraft}
            <Form />
        </div>
        <Footer />
        </>
    )
}

export default Home
