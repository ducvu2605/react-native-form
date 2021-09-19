import {actionLoginType} from '../../constants/actionRedux';

export const loginRequest = (data, onCallBackSuccess, onCallBackFail) => ({
  type: actionLoginType.toggleLogin,
  data,
  onCallBackSuccess,
  onCallBackFail,
});
export const loginSuccess = data => ({
  type: actionLoginType.loginSuccess,
  data,
});
export const loginFail = data => ({
  type: actionLoginType.loginFail,
  data,
});
export const loginSuccessByDefault = data => ({
  type: actionLoginType.loginSuccessDefault,
  data,
});
export const loginFailByDefault = data => ({
  type: actionLoginType.loginFailDefault,
  data,
});
