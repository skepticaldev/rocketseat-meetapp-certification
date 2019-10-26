import * as Type from '~/util/constants/type';

export function loadMeetupsRequest(date, page = 1) {
  return {
    type: Type.LoadMeetupsRequest,
    payload: { date, page },
  };
}

export function loadMeetupsSuccess(meetups, page) {
  return {
    type: Type.LoadMeetupsSuccess,
    payload: { meetups, page },
  };
}

export function loadMeetupsFailure() {
  return {
    type: Type.LoadMeetupsFailure,
  };
}
