/**
 * Confirmation dialog for deleting a factory
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup, Classes } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { deleteFactory } from '../../state/action/factory';

class DeleteFactoryDialog extends React.Component {
  constructor(props) {
    super(props);
    this.deleteFactory = this.deleteFactory.bind(this);
  }

  /**
   * Delete factory based on id contained in props.
   */
  deleteFactory() {
    this.props.deleteFactory(this.props.factory.id);
  }

  render() {
    return (
      <div className="dialog-content delete-dialog-content">
        <div className="dialog-title">Delete Factory</div>
        <div className="dialog-body">
          <p>Are you sure you want to delete this factory?</p>
          <p>This action can not be undone.</p>
          <ButtonGroup>
            <Button className={Classes.POPOVER_DISMISS}>Cancel</Button>
            <Button className={Classes.POPOVER_DISMISS} onClick={this.deleteFactory}>Delete</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

/**
 * Define our prop types
 */
DeleteFactoryDialog.propTypes = {
  factory: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  deleteFactory: PropTypes.func.isRequired,
};

// connect to get delete function from action.
export default connect(
  () => ({}),
  dispatch => bindActionCreators({ deleteFactory }, dispatch),
)(DeleteFactoryDialog);
