import React from 'react';

function HeaderContacts(props) {

    const contacts = [
        {
            id: 1,
            title: 'Москва',
            phone: '84991234567',
            textPhone: '8-499-123-45-67',
            iconClassName: "contacts-header__item_icon",
        },
        {
            id: 2,
            title: 'Бесплатно для России',
            phone: '88001234567',
            textPhone: '8-800-123-45-67',
            iconClassName: "contacts-header__item_second-phone",
        }
    ]

    const contactElements = contacts.map(el => (
        <div class="contacts-header__column" key={el.id}>
            <div class={`contacts-header__item ` + el.iconClassName}>
                <div class="contacts-header__label">{el.title}</div>
                <a href={`tel:${el.phone}`} class="contacts-header__phone">{el.textPhone}</a>
            </div>
        </div>
    ))

    return (
        <div class="top-header__column">
            <div class="top-header__contacts contacts-header">
                {contactElements}
            </div>
        </div>
    );
}

export default HeaderContacts;