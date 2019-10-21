import { all, takeLatest, call, put } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
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

    const data = response.data.map(({ id, meetup_id, user_id, meetup }) => ({
      id,
      meetup_id,
      user_id,
      meetup: {
        ...meetup,
        formattedDate: format(
          parseISO(meetup.date),
          "d 'de' MMMM, 'as' HH:mm",
          {
            locale: pt,
          }
        ),
        subscribed: true,
      },
    }));

    yield put(loadSubscriptionsSuccess(data));
  } catch (err) {
    yield put(loadSubscriptionsFailure());
  }
}

export function* handleSubscription({ payload }) {
  try {
    const { meetupId, intent } = payload;

    // Clarifying: intent is passing to determine the action.
    // in MeetupCard component the subscribed const say what
    // action need to be done

    const response = yield call(
      intent === Type.Subscribe ? api.post : api.delete,
      `meetup/${meetupId}/subscriptions`
    );

    yield put(handleSubscriptionSuccess(response.data));
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
