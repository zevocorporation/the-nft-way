import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

const Link = (props) => {

    const Styles={
        textDecoration:'none',
        fontFamily:'Gilroy-Regular',
        fontSize:'1em',
        ...props.style
    }
    return (
        <ReactLink
            to={props.to}
            style={Styles}
        >
            {props.children}
        </ReactLink>
    )
}

export default Link
