import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Wrapper from "./pokedex/wrapper";

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
