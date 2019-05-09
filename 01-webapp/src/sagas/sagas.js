import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* register(action) {
  console.log(action.payload)
  try {
    const response = yield call(API.postData, action.payload, 'http://localhost:4000/register');
    console.log(response)
    if (response.error) {
      yield put({
        type: 'REGISTER_FAILED',
        payload: response.error,
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

export default function* rootSaga() {
  yield takeEvery('USER_REG_REQUESTED', register);
}