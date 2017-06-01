import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const materialApp = (
   <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)
ReactDOM.render(materialApp, document.getElementById('root'));
registerServiceWorker();
