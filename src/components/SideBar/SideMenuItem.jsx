import React, { useState } from 'react';

function SideMenuItem(props) {
    const [isSubmenuShowed, setIsSubmenuShowed] = useState(false)
    const data = props.itemData
    let submenuElements
    let itemClass = ""
    // debugger
    if (data.subcategories != null && data.subcategories.length > 0) {
        itemClass = "menu-page__parent"

        submenuElements = data.subcategories.map((el, i) => (
            <li><a href={el.link} class="submenu-page__link">{el.title}</a></li>
        ))
    }
    itemClass += isSubmenuShowed ? " _active" : ""

    const submenuSetHover = () =>{
        setIsSubmenuShowed(true)
    }
    const submenuRemoveHover = () =>{
        setIsSubmenuShowed(false)
    }
    return (
        <li class={itemClass} 
            onMouseLeave={submenuRemoveHover}
            onMouseEnter={submenuSetHover}
        >
            <a href={data.categoryLink} class="menu-page__link">{data.categoryTitle} </a>
            <div class="menu-page__submenu submenu-page">
                <div class="submenu-page__item">
                    <ul class="submenu-page__menu">
                        {submenuElements}
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default SideMenuItem;