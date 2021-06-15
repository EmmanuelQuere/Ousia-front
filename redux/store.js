import { createStore } from 'redux';
import userReducer from './reducers/userReducer';

let store = createStore(userReducer);

export default store;
