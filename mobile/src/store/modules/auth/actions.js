import * as Type from '~/util/constants/type';

export function signInRequest(email, password) {
  return {
    type: Type.SignInRequest,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: Type.SignInSuccess,
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: Type.SignUpRequest,
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: Type.SignFailure,
  };
}

export function signOut() {
  return {
    type: Type.SignOut,
  };
}
