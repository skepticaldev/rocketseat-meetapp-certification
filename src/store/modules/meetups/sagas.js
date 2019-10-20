import { all, takeLatest, call, put } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import * as Type from '~/util/constants/type';

import { loadMeetupsSuccess } from './actions';

export function* loadMeetups({ payload }) {
  // eslint-disable-next-line prefer-const
  let { date, page } = payload;

  if (!date) {
    date = new Date();
  }

  try {
    const response = yield call(api.get, 'meetups', {
      params: { date, page },
    });

    const data = response.data.map(meetup => ({
      ...meetup,
      formattedDate: format(parseISO(meetup.date), "d 'de' MMMM, 'as' HH:mm", {
        locale: pt,
      }),
    }));

    yield put(loadMeetupsSuccess(data));
  } catch (err) {}
}

export default all([
  takeLatest([Type.LoadMeetupsRequest, 'persist/REHYDRATE'], loadMeetups),
]);
