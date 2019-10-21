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

export function handleSubscriptionRequest(meetupId, intent) {
  return {
    type: Type.HandleSubscriptionRequest,
    payload: { meetupId, intent },
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
