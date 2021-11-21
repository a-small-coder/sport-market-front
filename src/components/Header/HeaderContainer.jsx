import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCategoriesAC } from '../../redux/navigation_reducer';
import sendApiRequest, {GET_METHOD} from '../../utils/api_requests';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

function Header(props) {
    useEffect(()=> {
        const apiUrl = 'navigation/main_categories/'
        const saveCategoriesFromResponse = (response) => {
            console.log("response data", response.data)
            props.setCategories(response.data)
        }
        sendApiRequest(GET_METHOD, {apiUrl: apiUrl}, saveCategoriesFromResponse)
    }, [])

    return (
        <header className="header">
            <HeaderTop />
            <HeaderBottom/>
        </header>
    );
}

let mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCategories: (categories) =>{
            dispatch(setCategoriesAC(categories))
        },
    }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;