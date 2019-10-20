import produce from 'immer';
import * as Type from '~/util/constants/type';

const INITIAL_STATE = {
  subscriptions: [],
};

export default function subscriptions(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Type.LoadSubscriptionsSuccess: {
        draft.subscriptions = action.payload.subscriptions;
        break;
      }
      default:
    }
  });
}
