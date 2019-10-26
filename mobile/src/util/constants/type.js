/** Auth action types */

export const SignInRequest = '@auth/SIGN_IN_REQUEST';

export const SignInSuccess = '@auth/SIGN_IN_SUCCESS';

export const SignInFailure = '@auth/SIGN_IN_FAILURE';

export const SignUpRequest = '@auth/SIGN_UP_REQUEST';

export const SignOut = '@auth/SIGN_OUT';

/** User action types */

export const UpdateProfileRequest = '@user/UPDATE_PROFILE_REQUEST';

export const UpdateProfileSuccess = '@user/UPDATE_PROFILE_SUCCESS';

export const UpdateProfileFailure = '@user/UPDATE_PROFILE_FAILURE';

/** Meetups action types */
export const LoadMeetupsRequest = '@meetups/LOAD_MEETUPS_REQUEST';

export const LoadMeetupsSuccess = '@meetups/LOAD_MEETUPS_SUCCESS';

export const LoadMeetupsFailure = '@meetups/LOAD_MEETUPS_FAILURE';

/** Subscriptions action types */

export const LoadSubscriptionsRequest =
  '@subscriptions/LOAD_SUBSCRIPTIONS_REQUEST';

export const LoadSubscriptionsSuccess =
  '@subscriptions/LOAD_SUBSCRIPTIONS_SUCCESS';

export const LoadSubscriptionsFailure =
  '@subscriptions/LOAD_SUBSCRIPTIONS_FAILURE';

export const HandleSubscriptionRequest =
  '@subscriptions/HANDLE_SUBSCRIPTION_REQUEST';

export const HandleSubscriptionSuccess =
  '@subscriptions/HANDLE_SUBSCRIPTION_SUCCESS';

export const HandleSubscriptionFailure =
  '@subscriptions/HANDLE_SUBSCRIPTION_FAILURE';

// Use as button intent action
export const Subscribe = '@subscriptions/SUBSCRIBE';

export const Unsubscribe = '@subscriptions/UNSUBSCRIBE';
