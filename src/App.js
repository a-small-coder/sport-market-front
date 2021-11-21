import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Catalog from './pages/Catalog';
import MainPage from './pages/MainPage';
import './styles/style.css'

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
