import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import TennisDayCount from './components/TennisDayCount';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <TennisDayCount total={47}
                    competition={15}
                    casual={32}
                    goal={100}
    />
  </div>,
   document.getElementById('root'));
registerServiceWorker();
