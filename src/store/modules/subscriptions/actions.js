import * as Type from '~/util/constants/type';

export function loadSubscriptionsRequest() {
  return {
    type: Type.LoadSubscriptionsRequest,
  };
}

export function loadSubscriptionsSuccess(subscriptions) {
  return {
    type: Type.LoadSubscriptionsSuccess,
    payload: { subscriptions },
  };
}

export function loadSubscriptionsFailure() {
  return {
    type: Type.LoadSubscriptionsFailure,
  };
}
