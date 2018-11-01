import * as Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-widgets/dist/css/react-widgets.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Moment.locale('en');
momentLocalizer();

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
