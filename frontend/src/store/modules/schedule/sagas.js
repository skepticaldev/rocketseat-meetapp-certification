import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadScheduleSuccess,
  loadScheduleFailure,
  handleScheduleEventSuccess,
  cancelScheduleEventSuccess,
  cancelScheduleEventFailure,
} from './actions';

export function* loadSchedule() {
  try {
    const response = yield call(api.get, 'schedule');

    yield put(loadScheduleSuccess(response.data));
  } catch (err) {
    toast.error(
      'Erro ao carregar meetups, verifique sua conexao com a internet'
    );
    yield put(loadScheduleFailure());
  }
}

export function* handleScheduleEvent({ payload }) {
  try {
    const { id, banner, title, description, date, location } = payload;

    // The diference between create and update request is the id
    // If id exists then we call update else we call create
    yield call(id ? api.put : api.post, `meetups/${id || ''}`, {
      title,
      banner_id: banner,
      description,
      location,
      date,
    });

    yield put(handleScheduleEventSuccess());

    history.push('/dashboard');

    toast.success(
      `Seu meetup foi ${id ? 'atualizado' : 'criado'} com sucesso!`
    );
  } catch (err) {
    toast.error(
      'Não foi possível completar sua ação, verifique os dados por favor!'
    );
  }
}

export function* cancelScheduleEvent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    yield put(cancelScheduleEventSuccess());

    history.push('/dashboard');

    toast.success('Meetup cancelado com sucesso!');
  } catch (err) {
    toast.error('Houve um problema com o cancelamento!');
    yield put(cancelScheduleEventFailure());
  }
}

export default all([
  takeLatest('@schedule/LOAD_SCHEDULE_REQUEST', loadSchedule),
  takeLatest('@schedule/HANDLE_SCHEDULE_EVENT_REQUEST', handleScheduleEvent),
  takeLatest('@schedule/CANCEL_SCHEDULE_EVENT_REQUEST', cancelScheduleEvent),
]);
