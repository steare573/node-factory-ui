/**
 * Dialog to confirm regeneration of factory children
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup, Classes } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { regenerateFactoryChildren } from '../../state/action/factory';

class RegenerateFactoryChildrenDialog extends React.Component {
  constructor(props) {
    super(props);
    this.regenerateFactoryChildren = this.regenerateFactoryChildren.bind(this);
  }

  /**
   * Regenerate children for the factory in scope of this component.
   */
  regenerateFactoryChildren() {
    this.props.regenerateFactoryChildren(this.props.factory.id);
  }

  render() {
    return (
      <div className="dialog-content regenerate-dialog-content">
        <div className="dialog-title">Regenerate Children</div>
        <div className="dialog-body">
          <p>Are you sure you want to regenerate factory children?</p>
          <p>This action can not be undone.</p>
          <ButtonGroup>
            <Button className={Classes.POPOVER_DISMISS}>Cancel</Button>
            <Button
              className={Classes.POPOVER_DISMISS}
              onClick={this.regenerateFactoryChildren}
            >
              Regenerate
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

/**
 * Define our prop types
 */
RegenerateFactoryChildrenDialog.propTypes = {
  factory: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  regenerateFactoryChildren: PropTypes.func.isRequired,
};

// connecct to get action for regenerating children
export default connect(
  () => ({}),
  dispatch => bindActionCreators({ regenerateFactoryChildren }, dispatch),
)(RegenerateFactoryChildrenDialog);
