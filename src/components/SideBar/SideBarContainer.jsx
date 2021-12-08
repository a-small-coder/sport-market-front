import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProductCategoriesAC } from '../../redux/catalog_reducer';
import sendApiRequest, { GET_METHOD } from '../../utils/api_requests';
import SideMenu from './SideMenu';

function SideBar(props) {
    useEffect(()=> {
        const apiUrl = 'navigation/products_categories/'
        const saveCategoriesFromResponse = (response) => {
            console.log("response data", response.data)
            props.setProductCategories(response.data)
        }
        sendApiRequest(GET_METHOD, {apiUrl: apiUrl}, saveCategoriesFromResponse)
    }, [])
    const data = props.filterNavigation
        // {
        //     categoryTitle: 'Беговые дорожки',
        //     categoryLink: "/catalog",
        //     subcategories: [
        //         {title: 'Всепогодный', link: "/catalog"},
        //         {title: 'Для помещений', link: "/catalog"},
        //         {title: 'Профессиональный', link: "/catalog"},
        //         {title: 'Любительский', link: "/catalog"},
        //     ]
        // },
        // {
        //     categoryTitle: 'Эллиптические тренажеры',
        //     categoryLink: "/catalog",
        //     subcategories: []
        // },
        // {
        //     categoryTitle: 'Велотренажеры',
        //     categoryLink: "/catalog",
        //     subcategories: []
        // },
        // {
        //     categoryTitle: 'Гребные тренажеры',
        //     categoryLink: "/catalog",
        //     subcategories: []
        // },
        // {
        //     categoryTitle: 'Велотренажеры',
        //     categoryLink: "/catalog",
        //     subcategories: []
        // },
        // {
        //     categoryTitle: 'Вибромассажеры',
        //     categoryLink: "/catalog",
        //     subcategories: [
        //         {title: 'Всепогодный', link: "/catalog"},
        //         {title: 'Для помещений', link: "/catalog"},
        //         {title: 'Профессиональный', link: "/catalog"},
        //         {title: 'Любительский', link: "/catalog"},
        //     ]
        // },
        // {
        //     categoryTitle: 'Теннисные столы',
        //     categoryLink: "/catalog",
        //     subcategories: []
        // },
    if (!props.showSideBar){
        return <div/>
    }
    return (
        <aside class="page__side">
            <SideMenu categoriesData={data}/>
        </aside>
    );
}

let mapStateToProps = (state) => {
    return {
        filterNavigation: state.catalog.categories,
        showSideBar: state.sidebar.showSideBar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProductCategories: (categories) =>{
            dispatch(setProductCategoriesAC(categories))
        },
    }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;