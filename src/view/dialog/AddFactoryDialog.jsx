/**
 * Dialog content responsible for displaying add factory form.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Classes } from '@blueprintjs/core';
import { addFactory } from '../../state/action/factory';
import { validateFactoryForm } from '../../util';

/* eslint-disable jsx-a11y/label-has-for */
class AddFactoryDialog extends React.Component {
  /**
   * Setup our initial state for entering form input.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      min: 0,
      max: 0,
      numVals: 0,
    };
    this.setValOnState = this.setValOnState.bind(this);
    this.addFactory = this.addFactory.bind(this);
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
   * Add factory to the database/store.
   */
  addFactory() {
    this.props.addFactory(this.state.name, this.state.min, this.state.max, this.state.numVals);
  }

  render() {
    const { msg, valid } = validateFactoryForm(this.state);
    return (
      <div className="dialog-content">
        <div className="dialog-title">Add Factory</div>
        <div className="dialog-body">
          <div><label htmlFor="add-factory-name-input">Factory Name</label><input name="name" id="add-factory-name-input" onChange={this.setValOnState} value={this.state.name} type="text" className="pt-input" placeholder="Factory Name" /></div>
          <div><label htmlFor="add-factory-min-input">Min Value</label><input name="min" id="add-factory-min-input" onChange={this.setValOnState} value={this.state.min} type="number" className="pt-input" placeholder={1} /></div>
          <div><label htmlFor="add-factory-max-input">Max Value</label><input name="max" id="add-factory-max-input" onChange={this.setValOnState} value={this.state.max} type="number" className="pt-input" placeholder={10} /></div>
          <div><label htmlFor="add-factory-numvals-input">Num Values</label><input name="numVals" id="add-factory-numvals-input" onChange={this.setValOnState} value={this.state.numVals} type="number" className="pt-input" placeholder={15} /></div>
          <ButtonGroup>
            <Button className={Classes.POPOVER_DISMISS}>Cancel</Button>
            <Button
              disabled={!valid}
              className={valid ? Classes.POPOVER_DISMISS : ''}
              onClick={this.addFactory}
            >
              Add
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
AddFactoryDialog.propTypes = {
  addFactory: PropTypes.func.isRequired,
};

// connect to get add factory action injected.
export default connect(
  () => ({}),
  dispatch => bindActionCreators({ addFactory }, dispatch),
)(AddFactoryDialog);
