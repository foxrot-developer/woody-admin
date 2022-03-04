import React from 'react';

import '../Assets/CSS/button.css';

const Button = props => {
    return (
        <button className='btn main-button' >{props.children}</button>
    )
}

export default Button;
