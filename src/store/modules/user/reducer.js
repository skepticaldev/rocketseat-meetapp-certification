import produce from 'immer';
import * as Type from '~/util/constants/type';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Type.SignInSuccess: {
        draft.profile = action.payload.user;
        break;
      }
      case Type.UpdateProfileSuccess: {
        draft.profile = action.payload.profile;
        break;
      }
      case Type.SignOut: {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
