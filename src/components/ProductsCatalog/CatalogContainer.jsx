import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCategoriesAC } from '../../redux/navigation_reducer';
import CatalogNavigation from './CatalogNavigation';
import ProductCard from './ProductCard';
import sendApiRequest, {GET_METHOD} from '../../utils/api_requests';
import { setPagginationAC, setProductsAC } from '../../redux/catalog_reducer';

function Catalog(props) {

    useEffect(()=> {
        const apiUrl = 'product/all/'
        const saveDataFromResponse = (response) => {
            console.log("response data", response.data)
            const paggination = {
                page: response.data.page,
                page_size: response.data.page_size,
                page_count: response.data.page_count
            }
            props.setProducts(response.data.items)
            props.setPaggination(paggination)
        }
        sendApiRequest(GET_METHOD, {apiUrl: apiUrl}, saveDataFromResponse)
    }, [])

    if (props.products == null){
        return (
        <div class="catalog">
            <h1 class="catalog__title">Sheeeeeeeeeeet here we go again</h1>
            <CatalogNavigation key={1} wrapperClass="catalog__navi navi-catalog navi-catalog_top" data={props.paggination} />
            <div class="catalog__products items-products">
                <div class="items-products__column">
                    
                </div>
            </div>

            <CatalogNavigation key={2} wrapperClass="catalog__navi navi-catalog" data={props.paggination} />

        </div>
        )
    }
    const products = props.products.map(el => (
            <ProductCard data={el} key={el.id}/>
        )
    )
    return (
        <div class="catalog">
            <h1 class="catalog__title">Популярные товары</h1>
            <CatalogNavigation key={1} wrapperClass="catalog__navi navi-catalog navi-catalog_top" data={props.paggination} />
            <div class="catalog__products items-products">
                
                    {products}
            </div>

            <CatalogNavigation key={2} wrapperClass="catalog__navi navi-catalog" data={props.paggination} />

        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        products: state.catalog.products,
        paggination: state.catalog.paggination
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) =>{
            dispatch(setProductsAC(products))
        },
        setPaggination: (pagginationData) =>{
            dispatch(setPagginationAC(pagginationData))
        },
        
    }
}
const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;