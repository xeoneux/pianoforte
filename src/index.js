import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const AppContainer = () => (
  <Provider>
    <App />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
