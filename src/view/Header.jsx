/**
 * Component for displaying top navigation bar
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Alignment } from '@blueprintjs/core';
import { deleteAllFactories } from '../state/action/factory';


const Header = props => (
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>{props.title}</NavbarHeading>
      <NavbarDivider />
      <Button className="pt-minimal" icon="flame" text="Clear All Factories" onClick={props.deleteAllFactories} />
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <NavbarDivider />
      <Button className="pt-minimal" icon="code">
        <a href="https://github.com/steare573/node-factory-ui" target="_blank" rel="noopener noreferrer">View Frontend Code</a>
      </Button>
      <Button className="pt-minimal" icon="code">
        <a href="https://github.com/steare573/node-factory-socket-server" target="_blank" rel="noopener noreferrer">View Backend Code</a>
      </Button>
    </NavbarGroup>
  </Navbar>
);

/**
 * Set prop types definitions.
 */
Header.propTypes = {
  title: PropTypes.string,
  deleteAllFactories: PropTypes.func.isRequired,
};

/**
 * Set default props for props that are not required.
 */
Header.defaultProps = {
  title: 'Passport Node Factory',
};

/**
 * Connect to retrieve delete all action
 */
export default connect(state => ({
  treeData: state.treeData,
}), dispatch => bindActionCreators({
  deleteAllFactories,
}, dispatch))(Header);
