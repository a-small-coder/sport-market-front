import React, { useState } from 'react';
import ProductCardHovered from './ProductCardHovered';

function ProductCard(props) {
    const data = props.data
    data.link = data.category.slug + "/" + data.id
    const [isHover, setIsHover] = useState(false)
    const productCardSetHover = () =>{
        setIsHover(true)
    }
    const productCardRemoveHover = () =>{
        setIsHover(false)
    }

    return (
        <div class="items-products__column">
            <div 
                class="item-product"
                onMouseLeave={productCardRemoveHover}
                onMouseEnter={productCardSetHover}
            >

                <div class="item-product__labels">
                </div>
                <a href={data.link} class="item-product__image">
                    <picture>
                        {/* <source srcset="static/img/products/02.webp" type="image/webp" />  */}
                        <img src={data.image} alt="" />
                    </picture>
                </a>
                <div class="item-product__body">
                    <a href={data.link} class="item-product__title">
                        <span>{data.name}</span>
                        {data.category.name}
                    </a>
                    <div class="item-product__footer">
                        <div class="item-product__old-price rub">{data.price}</div>
                        <a href="" class="item-product__add"></a>
                        <div class="item-product__price rub">{data.price}</div>
                    </div>
                </div>

                {/* hovered  */}
                <ProductCardHovered isShowed={isHover} productData={data}/>

            </div>
        </div>
    );
}

export default ProductCard;