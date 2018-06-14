/**
 * Primary reducer combining all others.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import { combineReducers } from 'redux';
import treeData from './treeData';
import notification from './notification';

export default combineReducers({
  treeData,
  notification,
});
