export function loadScheduleRequest() {
  return {
    type: '@schedule/LOAD_SCHEDULE_REQUEST',
  };
}

export function loadScheduleSuccess(schedule) {
  return {
    type: '@schedule/LOAD_SCHEDULE_SUCCESS',
    payload: { schedule },
  };
}

export function loadScheduleFailure() {
  return {
    type: '@schedule/LOAD_SCHEDULE_FAILURE',
  };
}

export function handleScheduleEventRequest(
  id,
  banner,
  title,
  description,
  date,
  location
) {
  return {
    type: '@schedule/HANDLE_SCHEDULE_EVENT_REQUEST',
    payload: { id, banner, title, description, date, location },
  };
}

export function handleScheduleEventSuccess() {
  return {
    type: '@schedule/HANDLE_SCHEDULE_EVENT_SUCCESS',
  };
}

export function handleScheduleEventFailure() {
  return {
    type: '@schedule/HANDLE_SCHEDULE_EVENT_FAILURE',
  };
}
