import {  
  combineReducers
} from 'redux';
import { SUCCESSFUL_LOGIN } from './actionTypes.js'

export const login = (state = {}, action) =>{
	switch (action.type){
		case SUCCESSFUL_LOGIN:
			return {loggedIn: true};
		default:
			return state; 
	}
}

export const reducers = combineReducers({
	login
	});




