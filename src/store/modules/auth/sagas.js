import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { showSnackbar } from '~/util/Snackbar';

import * as Type from '~/util/constants/type';
import * as NavigationService from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    // history.push('/dashboard');
  } catch (err) {
    showSnackbar('Falha na autenticação, verifique seus dados!');

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    showSnackbar('Cadastro realizado com sucesso!');
    NavigationService.navigate('SignIn');
    // history.push('/');
  } catch (err) {
    showSnackbar('Falha no Cadastro verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Type.SignInRequest, signIn),
  takeLatest(Type.SignUpRequest, signUp),
  takeLatest(Type.SignOut, signOut),
]);
