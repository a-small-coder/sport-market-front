import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../../#Forms/RegisterForm';
import TitleMain from '../../elementsUI/TitleMain';
import { setShowSideBarAC } from '../../redux/sidebar_reducer';

function Register(props) {

    // hide sidebar
    useEffect(()=>{
        props.setShowSideBar(false)
    },[])

    return (
        <div>
            <TitleMain>Авторизация</TitleMain>
            <RegisterForm/>
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

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;