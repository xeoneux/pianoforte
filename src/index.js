import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Subscribe } from 'unstated';

import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const AppContainer = () => (
  <Provider>
    <Subscribe to={[]}>{() => <App />}</Subscribe>
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
