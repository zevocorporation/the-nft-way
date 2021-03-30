import React from 'react'

//Importing styles
import '../styles/patterns/card.scss'

//Importing components
import { Avatar, Button, Icon } from '../components/'

//Importing media assets
import history from '../assets/icons/history.svg'

import avatar from '../assets/images/avatar.svg'
import card from '../assets/images/card.svg'

const Card = (props) => {


    const Styles={
        flex:{
            display:'flex',
            alignItems:'center',
            gridGap:'0.4em'
        }
    }
    const renderAvatar=(
        <div className="avatar-block">
            <div className="block block-left">
                <Avatar src={avatar} alt="createdBy Avatar" />
                <div>
                    <p>Created by</p>
                    <p>{props.createdBy}</p>
                </div>
            </div>
            <div className="block block-right">
                <div>
                    <p>Owned by</p>
                    <p>{props.ownedBy}</p>
                </div>
                <Avatar src={avatar} alt="ownedBy Avatar" />
            </div>
        </div>
    )

    const renderContent=(
        <div className="content">
            <h3>{props.title}</h3>
            <div  className="block">
                <p>curren bid <span className="coin">ETH {props.eth}</span></p>
                <p className="coin">= $ 11.,559</p>
            </div>
            <div  className="block">
                <p>Bid ending in</p>
                <p>{props.expires}</p>
            </div>
            <div  className="block">
                <p style={Styles.flex}><Icon src={history} alt="history" /><span>View History</span></p>
                <Button className="primary">Place Bid</Button>
            </div>
        </div>
    )

    return (
        <div className="card" key={props.key}>
            {renderAvatar}
            <img src={card} alt="card" width={'100%'} />
            {renderContent}
        </div>
    )
}

export default Card
