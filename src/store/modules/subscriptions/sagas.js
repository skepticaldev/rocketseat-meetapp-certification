import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import * as Type from '~/util/constants/type';
import {
  loadSubscriptionsSuccess,
  loadSubscriptionsFailure,
  handleSubscriptionFailure,
  handleSubscriptionSuccess,
} from './actions';

export function* loadSubscriptions() {
  try {
    const response = yield call(api.get, 'subscriptions');

    yield put(loadSubscriptionsSuccess(response.data));
  } catch (err) {
    yield put(loadSubscriptionsFailure());
  }
}

export function* handleSubscription({ payload }) {
  try {
    const { id, intent } = payload;

    // Clarifying: intent is passing to determine the action.
    // in MeetupCard component the subscribed const say what
    // action need to be done

    yield call(
      intent === Type.Subscribe ? api.post : api.delete,
      `meetup/${id}/subscriptions`
    );

    yield put(handleSubscriptionSuccess(id, intent));
  } catch (err) {
    yield put(handleSubscriptionFailure());
  }
}

export default all([
  takeLatest(
    [Type.LoadSubscriptionsRequest, Type.LoadMeetupsSuccess],
    loadSubscriptions
  ),
  takeLatest(Type.HandleSubscriptionRequest, handleSubscription),
]);
