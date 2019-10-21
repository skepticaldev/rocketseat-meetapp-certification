import produce from 'immer';
import * as Type from '~/util/constants/type';

const INITIAL_STATE = {
  subs: [],
  loading: false,
};

export default function subscriptions(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Type.LoadSubscriptionsRequest: {
        draft.loading = true;
        break;
      }
      case Type.LoadSubscriptionsSuccess: {
        draft.subs = action.payload.subscriptions;
        draft.loading = false;
        break;
      }
      case Type.LoadSubscriptionsFailure: {
        draft.loading = false;
        break;
      }
      case Type.HandleSubscriptionRequest: {
        draft.loading = action.payload.id;
        break;
      }
      case Type.HandleSubscriptionSuccess: {
        draft.loading = false;
        break;
      }
      case Type.HandleSubscriptionFailure: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
