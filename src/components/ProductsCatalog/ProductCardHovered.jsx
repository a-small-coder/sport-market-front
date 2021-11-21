import React from 'react';

function ProductCardHovered(props) {
    const needShow = props.isShowed
    const data = props.productData
    if (needShow){
        return (
            <div class="item-product__hover hover-item-product">
                    <a href="/product" class="hover-item-product__title">
                        <span>{data?.name}</span>{data?.category?.name}
                    </a>
                    <div class="hover-item-product__options options-item-product">
                        <div class="options-item-product__item">
                            <div class="options-item-product__label">Тип беговой дорожки: </div>
                            <div class="options-item-product__value">{data?.subcategory?.name}</div>
                        </div>
                        <div class="options-item-product__item">
                            <div class="options-item-product__label">Скорость движения (км/ч): </div>
                            <div class="options-item-product__value"></div>
                        </div>
                        <div class="options-item-product__item">
                            <div class="options-item-product__label">Складывание:</div>
                            <div class="options-item-product__value"></div>
                        </div>
                    </div>
                    <div class="hover-item-product__body">
                        <a href="" class="hover-item-product__compare"><span>Сравнить</span></a>
                    </div>
                    <div class="hover-item-product__footer">
                        <div class="item-product__old-price rub">{data?.price}</div>
                        <a href="" class="hover-item-product__cart hover-item-product__cart_catalog"></a>
                        <div class="hover-item-product__price rub">{data?.price}</div>
                    </div>
                </div>
        )
    }
    return (
        <div>
            
        </div>
    );
}

export default ProductCardHovered;