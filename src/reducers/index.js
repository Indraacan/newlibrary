import { combineReducers } from 'redux';

import libraries from './libraries';
import students from './students';

export default combineReducers({
    libraries: libraries,
    students: students
});