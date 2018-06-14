/**
 * Actions related to manipulating tree data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */

/**
 * Add a new factory (goes to server)
 *
 * @param {string} name
 * @param {number} min
 * @param {number} max
 * @param {number} numVals
 */
export const addFactory = (name, min = 0, max = 0, numVals) => ({
  toServer: {
    transport: 'socket',
  },
  type: 'ADD_FACTORY',
  data: {
    name,
    min,
    max,
    numVals,
  },
});

/**
 * Set the entire tree state at once.
 *
 * @param {Object} data
 */
export const setTreeData = data => ({
  type: 'SET_TREE_DATA',
  data,
});

/**
 * Delete a factory by id (goes to server)
 *
 * @param {number} id
 */
export const deleteFactory = id => ({
  toServer: {
    transport: 'socket',
  },
  type: 'DELETE_FACTORY',
  data: {
    id,
  },
});

/**
 * Edit an existing factory (goes to server)
 *
 * @param {number} id
 * @param {string} name
 * @param {number} min
 * @param {number} max
 * @param {number} numVals
 */
export const editFactory = (id, name, min, max, numVals) => ({
  toServer: {
    transport: 'socket',
  },
  type: 'EDIT_FACTORY',
  data: {
    id,
    name,
    min,
    max,
    numVals,
  },
});

/**
 * Regenerate children for a factory meeting its constraints (goes to server)
 *
 * @param {number} id
 */
export const regenerateFactoryChildren = id => ({
  toServer: {
    transport: 'socket',
  },
  type: 'REGENERATE_FACTORY_CHILDREN',
  data: {
    id,
  },
});

/**
 * Delete all factories
 */
export const deleteAllFactories = () => ({
  toServer: {
    transport: 'socket',
  },
  type: 'DELETE_ALL_FACTORIES',
});

export default {
  addFactory,
  deleteFactory,
  editFactory,
  setTreeData,
  deleteAllFactories,
};
