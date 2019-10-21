import produce from 'immer';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
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
        draft.subs = action.payload.subscriptions.map(
          ({ meetup, ...rest }) => ({
            ...rest,
            meetup: {
              ...meetup,
              formattedDate: format(
                parseISO(meetup.date),
                "d 'de' MMMM, 'as' HH:mm",
                {
                  locale: pt,
                }
              ),
              subscribed: true,
            },
          })
        );
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
        const subIndex = draft.subs.findIndex(
          sub => action.payload.id === sub.meetup_id
        );
        draft.subs.splice(subIndex, 1);
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
