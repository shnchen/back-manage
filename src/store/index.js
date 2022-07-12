import {createStore,combineReducers} from 'redux';
import {count} from './reducers'
const reducers = combineReducers({
  count
})
const store = createStore(reducers)

export default store;