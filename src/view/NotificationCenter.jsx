/**
 * Component responsible for displaying error/success notifications to users
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toaster, Position } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { clearNotifications } from '../state/action/notification';


class NotificationCenter extends React.Component {
  /**
   * On update, display any new notifications and clear them once displayed.
   *
   * @return void
   */
  componentDidUpdate() {
    if (this.props.notifications.length) {
      this.props.notifications.forEach((notification) => {
        this.toaster.show(notification);
      });
      this.props.clearNotifications();
    }
  }

  /**
   * Getter for our toast ref handler to allow access to the toaster functions like "show"
   *
   * @return {Object} - containing keys and ref handler functions
   */
  get refHandlers() {
    return {
      toaster: (el) => { this.toaster = el; },
    };
  }

  /**
   * Render notifications as blueprint toasts.
   */
  render() {
    return <Toaster position={Position.TOP_CENTER} ref={this.refHandlers.toaster} />;
  }
}

/**
 * Set prop types definitions.
 */
NotificationCenter.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
    intent: PropTypes.string.isRequired,
  })),
  clearNotifications: PropTypes.func.isRequired,
};

/**
 * Set default props for props that are not required.
 */
NotificationCenter.defaultProps = {
  notifications: [],
};

/**
 * Connect notification component to notification store.
 */
export default connect(
  state => ({ notifications: state.notification.notifications }),
  dispatch => bindActionCreators({
    clearNotifications,
  }, dispatch),
)(NotificationCenter);
