import * as Type from '~/util/constants/type';

export function updateProfileRequest(data) {
  return {
    type: Type.UpdateProfileRequest,
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: Type.UpdateProfileSuccess,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: Type.UpdateProfileFailure,
  };
}
