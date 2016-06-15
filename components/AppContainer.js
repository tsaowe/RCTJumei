/**
 * Created by tsaowe on 6/15/16.
 */
import * as actions from '../redux/Actions';
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
    app: state
});

const mapDispatchToProps = (dispatch) => ({
    countDown:()=>{
        dispatch(actions.countDown())
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(App);