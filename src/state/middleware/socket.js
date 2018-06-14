/**
 * Middleware for allowing actions to send to server and registering socket events to plug directly
 * into redux without any components requiring knowledge of sockets.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-24
 */
import isObject from 'lodash.isobject';
import socket from '../../lib/socket';
import { setTreeData } from '../action/factory';
import { addNotification } from '../action/notification';

export default (store) => {
  // register for errors and tree data updates and dispatch to update stores
  socket.on('treeData', (data) => {
    store.dispatch(setTreeData(data));
    store.dispatch(addNotification('Tree Data Updated', 'success'));
  });

  socket.on('SERVER_ERROR', (data) => {
    store.dispatch(addNotification(data.message, 'danger'));
  });

  // allow actions with "toServer" to send out to the socket directly.
  return next => (action) => {
    if (action && isObject(action.toServer) && action.toServer.transport === 'socket') {
      const callback = action.toServer.callback || function noop() {};
      // allow user to override event name and data for passing to server if they want
      const eventName = action.toServer.event || action.type;
      const data = action.toServer.data || action.data;
      socket.emit(eventName, data, (...args) => {
        callback(args, store.dispatch, store.getState);
      });
    } else {
      next(action);
    }
  };
};
