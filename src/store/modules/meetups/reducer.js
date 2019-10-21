import produce from 'immer';
import * as Type from '~/util/constants/type';

const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Type.LoadMeetupsRequest: {
        draft.loading = true;
        break;
      }
      case Type.LoadMeetupsSuccess: {
        draft.list = action.payload.meetups;
        draft.loading = false;
        break;
      }
      case Type.LoadMeetupsFailure: {
        draft.loading = false;
        break;
      }
      case Type.HandleSubscriptionRequest: {
        break;
      }
      case Type.HandleSubscriptionSuccess: {
        draft.list = draft.list.map(({ subscribed, id, ...rest }) =>
          action.payload.id === id
            ? {
                ...rest,
                id,
                subscribed: action.payload.intent === Type.Subscribe,
              }
            : {
                ...rest,
                id,
                subscribed,
              }
        );
        break;
      }
      default:
    }
  });
}
