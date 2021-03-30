import React from 'react'

const Button = (props) => {

    const Styles={
        fontFamily:'Gilroy-Regular',
        ...props.style
    }

    return (
        <button
            onClick={props.onClick}
            className={props.className}
            style={Styles}
        >
            {props.children}
        </button>
    )
}

export default Button
