import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import '../semantic/dist/semantic.min.css'; // Nope: https://medium.com/webmonkeys/webpack-2-semantic-ui-theming-a216ddf60daf
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
