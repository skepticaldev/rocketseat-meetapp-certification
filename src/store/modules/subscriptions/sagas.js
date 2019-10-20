import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import * as Type from '~/util/constants/type';
import { loadSubscriptionsSuccess, loadSubscriptionsFailure } from './actions';

export function* loadSubscriptions() {
  try {
    const response = yield call(api.get, 'subscriptions');

    yield put(loadSubscriptionsSuccess(response.data));
  } catch (err) {
    yield put(loadSubscriptionsFailure());
  }
}

export default all([
  takeLatest(
    [Type.LoadSubscriptionsRequest, 'persist/REHYDRATE'],
    loadSubscriptions
  ),
]);
