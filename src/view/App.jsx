/**
 * Main application component registering redux provider and rendering primary containers.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */
import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../state/store';
import Header from './Header';
import MainContent from './MainContent';
import NotificationCenter from './NotificationCenter';

const App = ({ pageConfig }) => (
  <Provider store={store}>
    <div>
      <Header title={pageConfig.title} />
      <NotificationCenter />
      <MainContent />
    </div>
  </Provider>
);

/**
 * Define our prop types
 */
App.propTypes = {
  pageConfig: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default App;
