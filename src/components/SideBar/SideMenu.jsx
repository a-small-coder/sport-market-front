import React, { useState } from 'react';
import SideMenuItem from './SideMenuItem';

function SideMenu(props) {
    const [isCatalogShow, setIscatalogShow] = useState(true)
    let burgerClassName = "menu-page__burger"
    burgerClassName += isCatalogShow ? " _active" : ""
    const data = props.categoriesData
    let title = "Каталог товаров"
    let isNoData = false

    if (data == null || data.length === 0){
        title = "sheeet here we go again"
        isNoData = true
    }

    const menuElements = data.map(el => (
        <SideMenuItem itemData={el}/>
    ))
    const menuBurgerClick = () => {
        setIscatalogShow(!isCatalogShow)
    }

    if (isNoData){
        return (
            <nav class="page__menu menu-page">

                <div class="menu-page__header">
                    <div class="menu-page__title">{title}</div>
                </div>
            </nav>
        )
    }    
    if (isCatalogShow){
        return (
            <nav class="page__menu menu-page">
    
                <div class="menu-page__header">
                    <div class="menu-page__title">{title}</div>
                    <div class={burgerClassName}>
                        <div class="menu-page__lines" onClick={menuBurgerClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
    
                <div class="menu-page__body">
                    <ul class="menu-page__list">
                        {menuElements}
                    </ul>
                </div>
    
            </nav>
        );
    }
    return (
        <nav class="page__menu menu-page">

            <div class="menu-page__header">
                <div class="menu-page__title">{title}</div>
                <div class="menu-page__burger">
                    <div class="menu-page__lines" onClick={menuBurgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideMenu;