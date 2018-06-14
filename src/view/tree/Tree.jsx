/**
 * Component responsible for rendering out the entire tree.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { Tree } from '@blueprintjs/core';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Root from './Root';
import Factory from './Factory';

/**
 * Adapter function to translate factory data into data compatible with blueprint tree.
 *
 * @param {Array} factories - array of factory objects from store
 * @return {Array} of tree nodes formatted for blueprint tree
 */
export const formatFactoriesForRender = (factories) => {
  const resultData = [{
    id: 0,
    hasCaret: false,
    icon: 'home',
    label: <Root />,
    isExpanded: true,
    key: 'root0',
    childNodes: factories.map(factory => ({
      id: `factory::${factory.id}`,
      icon: 'build',
      isExpanded: true,
      label: <Factory factory={factory} />,
      hasCaret: false,
      key: `factory::${factory.id}`,
      childNodes: factory.children.map((child) => {
        const childId = uuid();
        return {
          id: `child${factory.id}::${child}::${childId}`,
          label: child,
          icon: 'chevron-right',
          hasCaret: false,
          key: `child${factory.id}::${child}::${childId}`,
        };
      }),
    })),
  }];

  return resultData;
};

/**
 * Actual component for rendering tree.
 *
 * @param {Object} - props object containing factories array
 */
const TreeView = ({ factories }) => (
  <div className="tree-view">
    <Tree contents={formatFactoriesForRender(factories)} />
  </div>
);

/**
 * Prop type definitions.
 */
TreeView.propTypes = {
  factories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    numVals: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.number),
  })),
};

/**
 * Set default props for non-required props.
 */
TreeView.defaultProps = {
  factories: [],
};

export default TreeView;

