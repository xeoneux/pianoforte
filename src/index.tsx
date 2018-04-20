import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import App from './components/App';
import { keyboardContainer } from './containers/keyboard';
import { midiContainer } from './containers/midi';
import { pianoContainer } from './containers/piano';
import { playerContainer } from './containers/player';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider
    inject={[midiContainer, pianoContainer, playerContainer, keyboardContainer]}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
