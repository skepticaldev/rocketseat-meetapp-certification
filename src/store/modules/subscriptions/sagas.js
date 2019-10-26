import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { showSnackbar } from '~/util/Snackbar';

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
    showSnackbar('Houve um problema ao carregar suas inscrições!', 'error');
    yield put(loadSubscriptionsFailure());
  }
}

export function* handleSubscription({ payload }) {
  try {
    const { id, subscribed } = payload;

    yield call(
      subscribed ? api.delete : api.post,
      `meetup/${id}/subscriptions`
    );

    showSnackbar(
      subscribed ? 'Inscrição removida com sucesso!' : 'Inscrito com successo!'
    );
    yield put(handleSubscriptionSuccess(id, !subscribed));
  } catch (err) {
    showSnackbar('Houve um problema na sua inscrição!', 'error');
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
