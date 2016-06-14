/**
 * Created by tsaowe on 6/14/16.
 */

import actions from './ActionTypes';


export const init = ()=> {
    return {
        type: actions.INITAPP
    }
};

export const countDownTime = () => {
    return {
        type: actions.COUNT_DOWN
    }
};

export const saveTimer = (timer) => {
    return {
        type: actions.SAVE_TIMER,
        timer
    }
};

export const countDown = () => {
    return function(dispatch) {
        let timer = setInterval(() => {
            dispatch(countDownTime())
        }, 1000);
        //把timer存入state
        dispatch(saveTimer(timer));
        
    }
};