import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { showSnackbar } from '~/util/Snackbar';
import * as Type from '~/util/constants/type';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

    const response = yield call(api.put, 'users', profile);

    showSnackbar('Perfil atualizado com sucesso');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    showSnackbar(
      'Houve um erro na atualização do perfil, verifique seus dados!',
      'error'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(Type.UpdateProfileRequest, updateProfile)]);
