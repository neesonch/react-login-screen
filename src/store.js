import {createStore} from 'redux';
import {reducers} from './reducers';

export function configureStore(inititalState ={}){
	const store = createStore(reducers, inititalState);
	return store;
};

export const store = configureStore();