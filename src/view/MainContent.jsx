/**
 * Stateless component "Container" responsible for passing data into the tree "Template"
 *
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TreeView from './tree/Tree';
import {
  addFactory,
  deleteFactory,
  editFactory,
  addNumberToFactory,
} from '../state/action/factory';

const Main = props => (
  <TreeView
    {...props}
    className="container-main"
    factories={props.treeData.factories}
  />
);

/**
 * Set prop types definitions.
 */
Main.propTypes = {
  treeData: PropTypes.shape({
    factories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number,
      numVals: PropTypes.number,
      children: PropTypes.arrayOf(PropTypes.number),
    })),
  }).isRequired,
};

/**
 * Connect main content to tree data stores to pass into tree
 */
export default connect(state => ({
  treeData: state.treeData,
}), dispatch => bindActionCreators({
  addFactory, deleteFactory, editFactory, addNumberToFactory,
}, dispatch))(Main);
