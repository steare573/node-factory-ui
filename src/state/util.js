/**
 * Module containing utility methods related to redux/app state
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */

/**
 * Create reducer from direct map of "type" to reducer handler.
 *
 * @param {Object} initialState
 * @param {Object} fnMap
 */
export const createReducer = (initialState, fnMap) =>
  (state = initialState, action) => {
    if (typeof fnMap[action.type] === 'function') {
      return fnMap[action.type](state, action);
    }
    return state;
  };

export default module.exports.defaults;
