import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function schedule(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@schedule/LOAD_SCHEDULE_SUCCESS': {
        draft.meetups = action.payload.schedule;
        break;
      }
      default:
    }
  });
}
