/**
 * Created by tsaowe on 6/14/16.
 */

import React from 'react';
import { Provider,connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../redux/IndexReducer';
import * as actions from '../redux/Actions';

import AppContainer from './AppContainer';

const store = createStore(reducer,compose(applyMiddleware(thunk), f=>f));
store.dispatch(actions.init());


export default React.createClass({
    render:function () {
        let props = this.props;
        return (
            <Provider store={store}>
                <AppContainer countDown={props.countDown}/>
            </Provider>
        );
    }
})