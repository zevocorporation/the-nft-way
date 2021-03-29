import React from 'react'

const Button = (props) => {

    const Styles={
        fontFamily:'Gilroy-Regular',
        fontSize:'1em',
        ...props.style
    }

    return (
        <button
            onClick={props.onClick}
            style={Styles}
        >
            {props.children}
        </button>
    )
}

export default Button
