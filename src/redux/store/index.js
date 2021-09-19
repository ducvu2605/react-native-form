import {applyMiddleware, createStore} from 'redux';
import allReduces from '../reducer';
import createSagaMiddleware from 'redux-saga';
import {takeEveryActionLoginSaga} from '../saga/login';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReduces, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(takeEveryActionLoginSaga);
export {store};
