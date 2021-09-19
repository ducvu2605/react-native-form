import {combineReducers} from 'redux';
import login from './login';
const allReduces = combineReducers({
  login,
});
export default allReduces;
