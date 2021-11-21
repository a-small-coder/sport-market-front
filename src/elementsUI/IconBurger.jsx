import React from 'react';

function IconBurger(props) {
    const wrapperClassName = props.wrapperClassName ? "menu__icon" + props.wrapperClassName : "menu__icon icon-menu"
    return (
        <div className={wrapperClassName}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default IconBurger;