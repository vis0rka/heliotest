import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* register(action) {
  try {
    const response = yield call(API.postData, action.payload, 'http://localhost:4000/register');
    console.log(response)
    if (response.status === "error") {
      yield put({
        type: 'REGISTER_FAILED',
        payload: response.message,
      });
    } else {
      yield put({
        type: 'USER_REG_SUCCEEDED', 
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: 'REGISTER_FAILED',
    });
    console.log(error) // eslint-disable-line
  }
};

function* login(action) {
  try {
    const response = yield call(API.postData, action.payload, 'http://localhost:4000/login');
    console.log(response)
    if (response.status === "error") {
      yield put({
        type: 'LOGIN_FAILED',
        payload: response.message,
      });
    } else {
      yield put({
        type: 'USER_LOGIN_SUCCEEDED', 
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
    });
    console.log(error) // eslint-disable-line
  }
};

export default function* rootSaga() {
  yield takeEvery('USER_REG_REQUESTED', register);
  yield takeEvery('USER_LOG_REQUESTED', login);
}