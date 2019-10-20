import * as Type from '~/util/constants/type';

export function loadMeetupsRequest(date, page = 1) {
  return {
    type: Type.LoadMeetupsRequest,
    payload: { date, page },
  };
}

export function loadMeetupsSuccess(meetups) {
  return {
    type: Type.LoadMeetupsSuccess,
    payload: { meetups },
  };
}

export function loadMeetupsFailure() {
  return {
    type: Type.LoadMeetupsFailure,
  };
}
