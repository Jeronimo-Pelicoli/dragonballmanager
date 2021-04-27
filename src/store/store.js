import { createStore, combineReducers } from 'redux';
import Esferas from './reducer/esferas.reducer';
import Profile from './reducer/profile.reducer';

const rootReducer = combineReducers({
    Esferas,
    Profile
});

const store = createStore(rootReducer);

export default store;