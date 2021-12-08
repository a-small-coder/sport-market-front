import React from 'react';
import { Link } from 'react-router-dom';

function HeaderBottom(props) {

    const leftColumnData = {
        type: 'list',
        wrapperClass: 'bottom-header__actions actions-header',
        elements: [
            { id: 11, type: '', hrefClass: 'actions-header__item actions-header__item_login', href: '/login', contentText: 'Вход' },
            { id: 12, type: '', hrefClass: 'actions-header__item actions-header__item_reg', href: '/register', contentText: 'Регистрация' },
            { id: 13, type: '', hrefClass: 'actions-header__item actions-header__item_email', href: 'mailto:sport@gmail.com', contentText: 'sport@gmail.com' },
        ]
    }
    const rightColumnData = {
        type: 'blocks',
        wrapperClass: 'bottom-header__info info-header',
        elements: [
            { 
                id: 1, 
                type: '', 
                wrapperClass: 'info-header__column', 
                hrefClass: 'info-header__callback', 
                href: '', 
                contentText: 'Обратный звонок' 
            },
            { 
                id: 2, 
                type: 'shedule', 
                wrapperClass: 'info-header__column', 
                hrefClass: 'info-header__schedule', 
                href: '', 
                contentText: [
                    {title: 'Пн–Пт:', time: '09:00–21:00;'}, 
                    {title: 'Сб–Вс:', time: '10:00–20:00'}
                ] 
            },
            { 
                id: 3, 
                type: '', 
                wrapperClass: 'info-header__column', 
                hrefClass: 'info-header__cart', 
                href: '/checkout', 
                contentText: '12' },
        ]
    }
    const columnWrapperClass = "bottom-header__column"
    return (
        <div class="header__bottom bottom-header">
            <div class="bottom-header__container _container">
                <div class="bottom-header__row">
                    <Column wrapperClass={columnWrapperClass} columnData={leftColumnData}/>
                    <Column wrapperClass={columnWrapperClass} columnData={rightColumnData}/>
                </div>
            </div>
        </div>
    );
}

function Column(props) {
    const wrapperClassName = props.wrapperClass
    const data = props.columnData
    let contentElements
    switch (props.columnData.type) {
        case 'list':
            contentElements = data.elements.map(el => (
                <li key={el.id}>
                    <Link key={"link"+el.id} href={el.href} class={el.hrefClass}><span>{el.contentText}</span></Link>
                </li>
            ))
            contentElements = <ul data-da="menu__body,0,640" class={data.wrapperClass}>
                {contentElements}
            </ul>
            break;

        case 'blocks':
            contentElements = data.elements.map(el => {
                if (el.type === 'shedule') {
                    return (
                        <div key={el.id} class={el.wrapperClass}>
                            <Shedule sheduleData={el.contentText}/>
                        </div>
                    )
                }
                return (
                    <div key={el.id} class={el.wrapperClass}>
                        <Link key={"link"+el.id} href={el.href} class={el.hrefClass}><span>{el.contentText}</span></Link>
                    </div>
                )
            })
            contentElements = <div class={data.wrapperClass}>
                {contentElements}
            </div>
            break;
 
        default:
            break;
    }
    return (
        <div class={wrapperClassName}>
            {contentElements}
        </div>
    )
}

function Shedule(props){
    const sheduleRows = props.sheduleData.map((el, i) => (
        <p key={i}><span>{el.title}</span> {el.time}</p>
    ))

    return(
        <div class="info-header__schedule">
            {sheduleRows}
        </div>
    )

}

export default HeaderBottom;