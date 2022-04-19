import { all, put, takeEvery, call,  delay } from 'redux-saga/effects';
import { FETCH_SINGLE_ITEM, SET_SINGLE_ITEM } from './types';
import { showSingleItemLoader, showSingleItemError } from './uiActions';
import axios from 'axios';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* sagaWatcher() {
  yield takeEvery(FETCH_SINGLE_ITEM, sagaWorker);
}

function* sagaWorker({ payload: itemId }) {
  try {
    console.log(itemId);
    yield put(showSingleItemError(false))
    yield put(showSingleItemLoader(true));
    const payload = yield call(getSingleItem, itemId);
    yield delay(500);
    console.log('payload:', payload)

    yield put({ type: SET_SINGLE_ITEM, payload });
    yield put(showSingleItemLoader(false));
  } catch (e) {
    yield put(showSingleItemLoader(false));
    yield put(showSingleItemError(true))
  }
}

export default function* rootSaga() {
  yield all([helloSaga(), sagaWatcher()]);
}
 

function getSingleItem(itemId) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
}