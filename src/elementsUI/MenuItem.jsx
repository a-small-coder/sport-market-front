import React from 'react';

function MenuItem(props) {
    const linkClassName = props.linkClassName ? props.linkClassName : "menu__link"
    const itemClassName = props.itemClassName ? props.itemClassName : ""
    return (
        <li className={itemClassName}>
            <a 
                className={linkClassName} 
                href={props.linkUrl} 
                >
                    {props.linkText}
            </a>
        </li>
    );
}

export default MenuItem;