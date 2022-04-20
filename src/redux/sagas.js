import { all, put, takeEvery, call,  delay } from 'redux-saga/effects';
import { FETCH_SINGLE_ITEM, SET_SINGLE_ITEM } from './types';
import { setShowLoader, setShowError } from './uiActions';
import axios from 'axios';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* sagaWatcher() {
  yield takeEvery(FETCH_SINGLE_ITEM, sagaWorker);
}

function* sagaWorker({ payload: itemId }) {
  try {
    yield put(setShowError(false))
    yield put(setShowLoader(true));
    const payload = yield call(getSingleItem, itemId);
    yield delay(500);

    yield put({ type: SET_SINGLE_ITEM, payload });
    yield put(setShowLoader(false));
  } catch (e) {
    yield put(setShowLoader(false));
    yield put(setShowError(true))
  }
}

export default function* rootSaga() {
  yield all([helloSaga(), sagaWatcher()]);
}
 

function getSingleItem(itemId) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
    .then((response) => {
      return response.data;
    });
}