import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import * as Type from '~/util/constants/type';

import { loadMeetupsSuccess, loadMeetupsFailure } from './actions';

export function* loadMeetups({ payload: { date, page } }) {
  if (!date) {
    date = new Date();
  }

  try {
    const response = yield call(api.get, 'meetups', {
      params: { date, page },
    });

    const subscriptions = yield select(state => state.subscriptions.subs);

    const data = response.data.map(meetup => ({
      ...meetup,
      formattedDate: format(parseISO(meetup.date), "d 'de' MMMM, 'as' HH:mm", {
        locale: pt,
      }),
      subscribed: subscriptions.some(sub => sub.meetup_id === meetup.id),
    }));

    yield put(loadMeetupsSuccess(data));
  } catch (err) {
    yield put(loadMeetupsFailure());
  }
}

export default all([takeLatest(Type.LoadMeetupsRequest, loadMeetups)]);
