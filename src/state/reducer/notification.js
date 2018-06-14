/**
 * Reducer responsible for application notification data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import { createReducer } from '../util';

const initialState = {
  notifications: [],
};

const notificationReducer = createReducer(initialState, {
  RESET_NOTIFICATIONS: () => initialState,
  ADD_NOTIFICATION: (state, action) => Object.assign({}, state, {
    notifications: state.notifications.concat(action.data.notifications),
  })
});

export default notificationReducer;
