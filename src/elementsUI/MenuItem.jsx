import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem(props) {
    const linkClassName = props.linkClassName ? props.linkClassName : "menu__link"
    const itemClassName = props.itemClassName ? props.itemClassName : ""
    return (
        <li className={itemClassName}>
            <Link
                className={linkClassName} 
                href={props.linkUrl} 
                >
                    {props.linkText}
            </Link>
        </li>
    );
}

export default MenuItem;