import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import TennisDayCount from './components/TennisDayCount';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <TennisDayCount />
  </div>,
   document.getElementById('root'));
registerServiceWorker();
