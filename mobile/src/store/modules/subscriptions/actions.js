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

export function handleSubscriptionRequest(id, subscribed) {
  return {
    type: Type.HandleSubscriptionRequest,
    payload: { id, subscribed },
  };
}

export function handleSubscriptionSuccess(id, subscribed) {
  return {
    type: Type.HandleSubscriptionSuccess,
    payload: { id, subscribed },
  };
}

export function handleSubscriptionFailure() {
  return {
    type: Type.HandleSubscriptionFailure,
  };
}
