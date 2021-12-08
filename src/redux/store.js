import {createStore, combineReducers} from 'redux';
import catalog_reducer from './catalog_reducer';
import navigation_reducer from './navigation_reducer';
import sidebar_reducer from './sidebar_reducer';

let reducers = combineReducers({
    navigation: navigation_reducer,
    catalog: catalog_reducer,
    sidebar: sidebar_reducer
})

let store = createStore(reducers)

window.state = store.getState()

export default store