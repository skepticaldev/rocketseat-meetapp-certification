import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import * as Type from '~/util/constants/type';

import { signInSuccess, signFailure } from './actions';

import { loadSubscriptionsRequest } from '~/store/modules/subscriptions/actions';
import { loadMeetupsRequest } from '~/store/modules/meetups/actions';

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
    console.tron.log('Hello there');
    yield put(loadSubscriptionsRequest());
    yield put(loadMeetupsRequest());
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados');
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

    Alert.alert(
      'Cadastro realizado com sucesso!',
      'Faca o login para continuar'
    );
    // history.push('/');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'verifique seus dados');
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
