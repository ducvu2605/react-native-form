import initialState from './initialState';
import {actionLoginType} from '../../constants/actionRedux';

const login = (state = initialState.login, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionLoginType.toggleLogin:
      console.log('REDUCERS Action data', action.data);
      console.log('REDUCERS state data', state);
      return {
        ...state,
        ...{
          email: action.data.email,
          password: action.data.password,
        },
      };

    case actionLoginType.loginSuccess:
      return {
        ...state,
        ...{
          message: 'Logged in successfully',
        },
      };
    case actionLoginType.loginFail:
      return {
        ...state,
        ...{
          message: 'Login failed',
        },
      };
    case actionLoginType.loginSuccessDefault:
      return {
        ...state,
        ...{
          message: 'Logged in successfully by User default',
        },
      };
    case actionLoginType.loginFailDefault:
      return {
        ...state,
        ...{
          message: 'Login failed by User default',
        },
      };
    default:
      return state;
  }
};

export default login;
