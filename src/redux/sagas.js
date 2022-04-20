import { all, put, takeEvery, call, delay } from 'redux-saga/effects';
import {
  FETCH_SINGLE_ITEM,
  SET_SINGLE_ITEM,
  FETCH_GALLERY,
  SET_GALLERY,
} from './types';
import { setShowLoader, setShowError } from './uiActions';
import axios from 'axios';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* sagaItemWatcher() {
  yield takeEvery(FETCH_SINGLE_ITEM, sagaItemWorker);
}
export function* sagaGalleryWatcher() {
  yield takeEvery(FETCH_GALLERY, sagaGalleryWorker);
}

function* sagaGalleryWorker() {
  console.log('works!');
}

function* sagaItemWorker({ payload: itemId }) {
  try {
    yield put(setShowError(false));
    yield put(setShowLoader(true));
    const payload = yield call(getSingleItem, itemId);
    yield delay(500);

    yield put({ type: SET_SINGLE_ITEM, payload });
    yield put(setShowLoader(false));
  } catch (e) {
    yield put(setShowLoader(false));
    yield put(setShowError(true));
  }
}

export default function* rootSaga() {
  yield all([helloSaga(), sagaItemWatcher(), sagaGalleryWatcher()]);
}

function getSingleItem(itemId) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
    .then((response) => {
      return response.data;
    });
}

function getGallery() {
  return axios
    .get(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=24`)
    .then((response) => {
      return response.data;
    });
}
