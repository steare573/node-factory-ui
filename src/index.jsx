import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import config from './config';
import './styles/main.scss';

ReactDOM.render(
  <App pageConfig={config.page} />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);
