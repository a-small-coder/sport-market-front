import React, { useState } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LoginConteiner from './components/Auth/LoginConteiner';
import RegisterContainer from './components/Auth/RegisterContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Catalog from './pages/Catalog';
import MainPage from './pages/MainPage';
import './styles/style.css'
import './styles/Forms.scss'

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer/>
      <main className="page">
        <div class="page__container _container">
          <SideBarContainer/>
          <div class="page__content">
            <Switch>
              <Route path="/catalog" component={Catalog}/>
              <Route path="/login" component={LoginConteiner}/>
              <Route path="/register" component={RegisterContainer}/>
              <Route path="/" component={MainPage}/>
            </Switch>
          </div>
        </div>
        {/* page description */}
      </main>
      
      {/* footer */}
      </BrowserRouter>
      
  );
}

export default App;
