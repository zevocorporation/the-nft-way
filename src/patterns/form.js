import React from 'react'

//Importing styles
import '../styles/patterns/form.scss'

//Importing Media assets
import formImg from '../assets/images/form.svg'

const Form = () => {

    const renderFormHeader = (
        <div className="form-block">
            <img src={formImg} alt="illustration" />
            <div>
                <h3>Man with love</h3>
                <div  className="block">
                    <p>
                        curren bid 
                        <span className="coin">
                            ETH 4.55
                        </span>
                    </p>
                    <p className="coin">
                        = $ 11.,559
                    </p>
                </div>
                <div  className="block">
                    <p>Bid ending in</p>
                    <p>12h 1m 4s</p>
                </div>
                <p className="primary-text">
                    View Artifact
                </p>
            </div>
        </div>
    )

    const renderForm = (
        <div className="bid-form">
            <h3>Enter your bid details</h3>
            <div>
                <div>
                    <p>Your name</p>
                    <input type="text" />
                    <p>Your email address</p>
                    <input type="email" />
                    <p></p>
                </div>
                <div>
                    <p>Account ID</p>
                    <input type="text" />
                    <p>Timestamp</p>
                    <input type="text" />
                </div>
            </div>
        </div>
    )

    return (
        <div className="form">
           {renderFormHeader}
           {renderForm}
        </div>
    )
}

export default Form
