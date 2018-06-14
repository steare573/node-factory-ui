
/**
 * Module containing reusable utility functions
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-03
 */

/**
 * Quick and dirty validator for the add/edit factory page.
 */
export const validateFactoryForm = (data) => {
  let valid = false;
  let msg;
  if (!data.name) {
    msg = 'Name is required';
  } else if (!data.min && data.min !== 0) {
    msg = 'Minimum bound is required';
  } else if (!data.max && data.max !== 0) {
    msg = 'Maximum bound is required';
  } else if ((1 * data.max) <= (1 * data.min)) {
    msg = 'Maximum bound must be greater than minimum bound';
  } else if (!data.numVals) {
    msg = 'Number of children is required';
  } else if (data.numVals < 1 || data.numVals > 15) {
    msg = 'Number of children must be between 1 & 15';
  } else {
    msg = '';
    valid = true;
  }
  return {
    valid,
    msg,
  };
};

export default module.exports.default;
