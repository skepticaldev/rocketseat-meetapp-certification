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

export function handleSubscriptionRequest(id, intent) {
  return {
    type: Type.HandleSubscriptionRequest,
    payload: { id, intent },
  };
}

export function handleSubscriptionSuccess(subscription) {
  return {
    type: Type.HandleSubscriptionSuccess,
    payload: { subscription },
  };
}

export function handleSubscriptionFailure() {
  return {
    type: Type.HandleSubscriptionFailure,
  };
}
