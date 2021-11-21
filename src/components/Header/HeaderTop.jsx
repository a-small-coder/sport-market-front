import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderContacts from './HeaderContacts';
import logo from '../../img/logo.png'

function HeaderTop(props) {
    const logoImg = logo
    return (
        <div class="header__top top-header">
		    <div class="top-header__content _container">

                <HeaderMenu/>
                
                <div class="top-header__column top-header__column_logo">
                    <a href="/" class="top-header__logo">
                        <picture>
                            <img src={logoImg} alt=""/>
                        </picture>
                    </a>
                </div>

                <HeaderContacts/>
			</div>

        </div>
    );
}

export default HeaderTop;