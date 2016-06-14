/**
 * Created by tsaowe on 6/14/16.
 */

import actions from './ActionTypes';

export default (state = {
    time: 3,
    timer:-1
}, action)=> {

    switch (action.type) {
        case actions.INITAPP:
            return Object.assign({}, state, {
                time: 4
            });
        case actions.COUNT_DOWN:
            let current = state.time;
            return Object.assign({}, state, {
                time: -- current
            });
        case actions.SAVE_TIMER:
            return Object.assign({}, state, {
                timer: action.timer
            }); 
    }
};

