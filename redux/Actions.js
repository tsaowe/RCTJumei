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


export const countDown = () => {
    return function(dispatch) {
        
        setTimeout(()=> {
            clearInterval(setInterval(() => {
                dispatch(countDownTime())
            }, 1000));
        }, 5000);
        
    }
};