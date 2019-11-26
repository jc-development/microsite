import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCEEDED,
  FETCH_PRODUCTS_FAILED
} from './actions';

export const fetchUrl = () => fetch('https://api.herokuapp.com/products', {
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then( (response) => {
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
});

export function* fetchProducts() {
  try {
    const products = yield call(fetchUrl);

    yield put({
      type: FETCH_PRODUCTS_SUCCEEDED,
      payload: {
        PRODUCTS: PRODUCTS.map( product => ({
          id: product.id,
          title: product.description || 'page title'
        }))
      }
    });
  } catch (error) {
    yield put({
      type: FETCH_PRODUCTS_FAILED,
      payload: error
    });
  }
}

export function* fetchProductsSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, fetchProducts);
}

export default function* rootSaga() {
  yield all([
    fetchProductsSaga()
  ]);
}
