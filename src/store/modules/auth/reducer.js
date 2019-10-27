import produce from 'immer';
import * as Type from '~/util/constants/type';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Type.SignInRequest: {
        draft.loading = true;
        break;
      }
      case Type.SignInSuccess: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case Type.SignFailure: {
        draft.loading = false;
        break;
      }
      case Type.SignOut: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
