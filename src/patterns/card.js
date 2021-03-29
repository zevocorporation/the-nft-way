import React from 'react'

//Importing styles
import '../styles/patterns/card.scss'

//Importing components
import { Avatar, Button, Icon } from '../components/'

//Importing media assets
import history from '../assets/icons/history.svg'

import avatar from '../assets/images/avatar.svg'
import card from '../assets/images/card.svg'

const Card = () => {

    const renderAvatar=(
        <div className="avatar-block">
            <div className="block block-left">
                <Avatar src={avatar} alt="createdBy Avatar" />
                <div>
                    <p>Created by</p>
                    <p>#123456</p>
                </div>
            </div>
            <div className="block block-right">
                <div>
                    <p>Owned by</p>
                    <p>#123456</p>
                </div>
                <Avatar src={avatar} alt="ownedBy Avatar" />
            </div>
        </div>
    )

    const renderContent=(
        <div className="content">
            <h3>The Roman</h3>
            <div  className="block">
                <p>curren bid ETH 5.89</p>
                <p>= $ 11.,559</p>
            </div>
            <div  className="block">
                <p>Bid ending in</p>
                <p>12h 24m 36s</p>
            </div>
            <div  className="block">
                <p><Icon src={history} alt="history" /><span>View History</span></p>
                <Button>Place Bid</Button>
            </div>
        </div>
    )

    return (
        <div className="card">
            {renderAvatar}
            <img src={card} alt="card" width={'100%'} />
            {renderContent}
        </div>
    )
}

export default Card
