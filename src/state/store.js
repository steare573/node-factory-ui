/**
 * Our one store to rule them all.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import socketMw from './middleware/socket';

export default createStore(
  reducer,
  {},
  applyMiddleware(socketMw),
  // eslint-disable-next-line no-undef
  window.devToolsExtension && window.devToolsExtension(),
);
