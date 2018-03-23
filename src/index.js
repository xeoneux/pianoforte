import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import App from './components/App';
import { appContainer } from './containers/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider inject={[appContainer]}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
