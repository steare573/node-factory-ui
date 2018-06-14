/**
 * Socket abstraction in case we want to swap it in the future.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import io from 'socket.io-client';
import config from '../config';

export class Socket {
  constructor(hostname) {
    this.socket = io(hostname);
    this.socket.on('connect', () => {
      this.socket.emit('init');
    });
  }

  on(event, handler) {
    this.socket.on(event, handler);
  }

  emit(event, data, cb = () => {}) {
    this.socket.emit(event, data, cb);
  }
}

export default new Socket(config.server.socket);
