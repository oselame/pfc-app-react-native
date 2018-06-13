import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import ReduxMulti from 'redux-multi';

import Rotas from './router';
import reducers from './reducers';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = applyMiddleware(ReduxMulti, ReduxThunk, ReduxPromise)(createStore)(reducers, devTools);
export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxMulti, ReduxThunk, ReduxPromise))}>
                  <Rotas />
            </Provider>
        );
    }
}
