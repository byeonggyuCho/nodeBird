import { combindReducers } from 'redux';
import user from './user';
import post from './post';



const rootReducer = combindReducers({
    user,
    post
});


export default rootReducer;