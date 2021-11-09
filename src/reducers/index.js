import { combineReducers } from 'redux';

import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './registration';
import { user } from './user';

const rootReducer = combineReducers({
    alert,
    authentication,
    registration,
    user
});

export default rootReducer;