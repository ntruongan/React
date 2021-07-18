import { combineReducers } from 'redux';
import phones from './tasks';

const myReducers = combineReducers({
	phoneNumber : phones // tasks : tasks
});

export default myReducers;