import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App';
import { VillageProvider } from './store/context';

ReactDOM.render(
  <VillageProvider>
    <App />
  </VillageProvider>,
  document.getElementById('root')
);
