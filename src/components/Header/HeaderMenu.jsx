import React from 'react';
import { connect } from 'react-redux';
import IconBurger from '../../elementsUI/IconBurger';
import MenuItem from '../../elementsUI/MenuItem';

function HeaderMenu(props) {
    const burgerClassName = "icon-menu"
    const menuLinkClassName = "menu__link"
    const links = props.navigation.main_categories
    if (links == null || links.length < 1){

        return (
            <div class="top-header__column">
                <div class="top-header__menu menu">
                    sheeeeet here we go again
                </div>
            </div>
        )
    }
    const menuElements = links.map( el => (
        <MenuItem key={el.slug} linkClassName={menuLinkClassName} linkUrl={el.slug} linkText={el.name} />
    ))
    
    return (
        <div class="top-header__column">
            <div class="top-header__menu menu">
                
                <IconBurger wrapperClassName={burgerClassName}/>

                <nav class="menu__body">
                    <ul class="menu__list">
                        {menuElements}
                    </ul>
                </nav>
            </div>
        </div>
    );
}


// {name: "Распродажа", slug: "sale"},
// {name: "Доставка и Сборка", slug: "about-us"},
// {name: "Гарантия", slug: "waranty"},
// {name: "Оплата", slug: "payment"},
// {name: "Контакты", slug: "contacts"},
// {name: "Каталог", slug: "catalog"},
let mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}
const HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);

export default HeaderMenuContainer;