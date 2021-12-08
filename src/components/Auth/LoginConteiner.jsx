import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../#Forms/LoginForm';
import TitleMain from '../../elementsUI/TitleMain';
import { setShowSideBarAC } from '../../redux/sidebar_reducer';

function Login(props) {

    // hide sidebar
    useEffect(()=>{
        props.setShowSideBar(false)
    },[])

    return (
        <div>
            <TitleMain>Авторизация</TitleMain>
            <LoginForm/>
        </div>
        
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
        setShowSideBar: (isShowed) =>{
            dispatch(setShowSideBarAC(isShowed))
        },
    }
}

const LoginConteiner = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginConteiner;