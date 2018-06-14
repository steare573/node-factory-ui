/**
 * Reducer responsible for factory tree data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import { createReducer } from '../util';

const initialState = {
  factories: [],
};

const treeDataReducer = createReducer(initialState, {
  RESET_TREE: () => initialState,
  SET_TREE_DATA: (state, action) => Object.assign({}, state, {
    factories: action.data.factories,
  }),

});

export default treeDataReducer;
