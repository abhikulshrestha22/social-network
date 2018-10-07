import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
//import reducers from './reducers';
import authReducer from './reducers/authReducer';
import {logInAction} from './actions/authActions';

const store = createStore(authReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//First check whether token is available , 
//if available, then dispatch that user is authenticated
const token = localStorage.getItem('sn-token');

if(token){
    store.dispatch(logInAction());
    console.log("token is present");
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

