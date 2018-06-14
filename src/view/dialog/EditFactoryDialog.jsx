/**
 * Dialog content responsible for displaying add factory form.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup, Classes } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { editFactory } from '../../state/action/factory';
import { validateFactoryForm } from '../../util';
/* eslint-disable jsx-a11y/label-has-for */
class EditFactoryDialog extends React.Component {
  /**
   * Set our initial form data from props.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    // just setting the initial values...we are not keeping them in sync with state as user is
    // overriding props.
    this.state = {
      name: props.factory.name || '',
      min: props.factory.min || 0,
      max: props.factory.max || 0,
      numVals: props.factory.numVals || 0,
    };
    this.setValOnState = this.setValOnState.bind(this);
    this.editFactory = this.editFactory.bind(this);
  }

  /**
   * Change handler for updating state based on user input to form inputs.
   *
   * @param {Event} e
   */
  setValOnState(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * Update factory in the database/store.
   */
  editFactory() {
    this.props.editFactory(
      this.props.factory.id,
      this.state.name, this.state.min,
      this.state.max,
      this.state.numVals,
    );
  }

  render() {
    const { msg, valid } = validateFactoryForm(this.state);
    return (
      <div className="dialog-content edit-factory-dialog-content">
        <div className="dialog-title">Edit Factory</div>
        <div className="dialog-body">
          <div>NOTE: Changing more than just the name will regenerate child nodes</div>
          <label htmlFor="edit-factory-name-input">Factory Name</label><input name="name" id="edit-factory-name-input" onChange={this.setValOnState} value={this.state.name} type="text" className="pt-input" placeholder="Factory Name" />
          <label htmlFor="edit-factory-min-input">Min Value</label><input name="min" id="edit-factory-min-input" onChange={this.setValOnState} value={this.state.min} type="number" className="pt-input" placeholder={1} />
          <label htmlFor="edit-factory-max-input">Max Value</label><input name="max" id="edit-factory-max-input" onChange={this.setValOnState} value={this.state.max} type="number" className="pt-input" placeholder={10} />
          <label htmlFor="edit-factory-numval-input">Num Values</label><input name="numVals" id="edit-factory-numval-input" onChange={this.setValOnState} value={this.state.numVals} type="number" className="pt-input" placeholder={15} />
          <ButtonGroup>
            <Button className={Classes.POPOVER_DISMISS}>Cancel</Button>
            <Button
              disabled={!valid}
              className={valid ? Classes.POPOVER_DISMISS : ''}
              onClick={this.editFactory}
            >
              Edit
            </Button>
          </ButtonGroup>
          <div className="validation-message">{msg}</div>
        </div>
      </div>
    );
  }
}

/**
 * Define our prop types.
 */
EditFactoryDialog.propTypes = {
  editFactory: PropTypes.func.isRequired,
  factory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    numVals: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

// connect ot get our function to save our changes
export default connect(
  () => ({}),
  dispatch => bindActionCreators({ editFactory }, dispatch),
)(EditFactoryDialog);
