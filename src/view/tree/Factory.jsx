/**
 * Component responsible for rendering the factory label and controls in the tree.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { Popover, ButtonGroup, Button } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import DeleteFactoryDialog from '../dialog/DeleteFactoryDialog';
import EditFactoryDialog from '../dialog/EditFactoryDialog';
import RegenerateFactoryChildrenDialog from '../dialog/RegenerateFactoryChildrenDialog';

const Factory = ({ factory }) => (
  <div>
    <span>{factory.name}</span>
    <ButtonGroup>
      <Popover position="left-top" content={<DeleteFactoryDialog factory={factory} />}>
        <Button title="Delete Factory" icon="trash" />
      </Popover>
      <Popover content={<EditFactoryDialog factory={factory} />} position="left-top">
        <Button title="Edit Factory" icon="edit" />
      </Popover>
      <Popover position="left-top" content={<RegenerateFactoryChildrenDialog factory={factory} />}>
        <Button title="Regenerate Children" icon="refresh" />
      </Popover>
    </ButtonGroup>
  </div>
);

/**
 * Define our proptypes
 */
Factory.propTypes = {
  factory: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    numVals: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default Factory;

