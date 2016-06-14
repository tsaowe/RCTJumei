/**
 * Created by tsaowe on 6/14/16.
 */

import React from 'react';
import { Provider,connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../redux/IndexReducer';
import * as actions from '../redux/Actions';

import Welcome from './welcome';

const store = createStore(reducer,compose(applyMiddleware(thunk), f=>f));
store.dispatch(actions.init());
const mapStateToProps = state => ({
    app: state
});
const mapDispatchToProps = (dispatch) => ({
    countDown:dispatch(actions.countDown())
});
const WelcomeContainer = connect(mapStateToProps,mapDispatchToProps)(Welcome);
export default React.createClass({
    render:function () {
        return (
            <Provider store={store}>
                <WelcomeContainer />
            </Provider>
        )
    }
})