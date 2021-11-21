import React from 'react';

function CatalogNavigation(props) {
    const wrapperClassName = props.wrapperClass
    const data = props.data
    let paggingItems =  getPagginatedNumbers(data)
    const paggingElements = paggingItems.map((el, index) =>  {
        let elementClass = el == data.page ? "pagging__item _active" : "pagging__item"
        return(
            <li key={index}>
                <a href="" class={elementClass}>{el}</a>
            </li>
        )
        
    })
    return (
        <div class={wrapperClassName}>

            <div class="navi-catalog__show show-catalog">
                <div class="show-catalog__label">На странице:</div>
                <div class="show-catalog__select">
                    <select name="form[]" class="show">
                        <option value="1" selected={true}>{data.page_size}</option>
                        <option value="2">40</option>
                        <option value="3">80</option>
                    </select>
                </div>
            </div>

            <div class="navi-catalog__pages">
                <div class="pagging">
                    <a href="" class="pagging__arrow"></a>
                    <ul class="pagging__list">
                        {paggingElements}
                    </ul>
                        
                    <a href="" class="pagging__arrow"></a>
                </div>
            </div>

        </div>
    );
}

function getPagginatedNumbers(paggingData) {
    let needLastDots = false
    let step = 3
    let start = 1
    let pageNumbers = ["1"]
    if (paggingData.page > 1 + step){
        start = paggingData.page - step
        pageNumbers.push("...")
    }
    let end = paggingData.page_count
    if (end > start + step){
        end = start + step
        needLastDots = true
    }
    
    for( let i = 1 + start; i <= end; i++){
        pageNumbers.push(i)
    }
    if (needLastDots){
        pageNumbers.push("...")
        pageNumbers.push(paggingData.page_count)
    }
    return pageNumbers
}

export default CatalogNavigation;