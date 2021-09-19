import {put, takeEvery} from 'redux-saga/effects';
import {getUserData, USER_DEFAULT} from '../../utils/storage';
import {actionLoginType} from '../../constants/actionRedux';

function* compareUserWithAction(action) {
  console.log('Action data SAGA ', action);
  const user = yield getUserData();
  if (user !== null) {
    if (
      (user.email === action.data.email &&
        user.password === action.data.password) ||
      (USER_DEFAULT.email === action.data.email &&
        USER_DEFAULT.password === action.data.password)
    ) {
      // use Put to excuse  action Reducer -> update data into Store(State)
      yield put({type: actionLoginType.loginSuccess});
      yield action.onCallBackSuccess();
    } else {
      // fail in user exist
      yield put({type: actionLoginType.loginFail});
      yield action.onCallBackFail();
    }
  } else {
    // Fail non-user async
    if (
      USER_DEFAULT.email === action.data.email &&
      USER_DEFAULT.password === action.data.password
    ) {
      yield put({type: actionLoginType.loginSuccessDefault});
      yield action.onCallBackSuccess();
    } else {
      // fail in non-user async
      yield put({type: actionLoginType.loginFailDefault});
      yield action.onCallBackFail();
    }
  }
}

export function* takeEveryActionLoginSaga() {
  yield takeEvery('TOGGLE_LOGIN', compareUserWithAction);
}
