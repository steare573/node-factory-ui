/**
 * Component responsible for rendering the root label and controls in the tree.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { Popover, Button, ButtonGroup } from '@blueprintjs/core';
import AddFactoryDialog from '../dialog/AddFactoryDialog';

const Root = () => (
  <div>
    <span>
      Root
    </span>
    <ButtonGroup>
      <Popover content={<AddFactoryDialog />} position="left-top">
        <Button title="Add Factory" icon="add" />
      </Popover>
    </ButtonGroup>
  </div>
);

export default Root;
