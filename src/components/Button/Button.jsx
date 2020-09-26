import React from 'react';

const Button = ({onClick, children, palette = ''}) => {

    const classes = 
        `button ${palette === 'alert' && 'button-alert' || ''} ${palette === 'success' && 'button-success' || ''} `

    return (
        <button className={classes} onClick={onClick}> {children} </button>
    );

}

export default Button;