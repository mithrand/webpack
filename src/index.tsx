import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'styles/index.scss';
import { AppProps } from './components/App/types/AppTypes';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// required images and fonts
const favicon = require('images/favicon.ico');
const iconttf = require('../fonts/sonemo-icons.ttf');
const iconsWoff = require('../fonts/sonemo-icons.woff');
const favicon32 = require('images/favicon-32x32.png');
const favicon64 = require('images/favicon-16x16.png');
import { routes } from './router/routes';

const appProps = { 
  location:{ 
    pathname:'',
  }, 
  children:'',
};

const index = (
  <BrowserRouter>
    <App {...appProps} />
  </BrowserRouter>
);

ReactDOM.render(index,document.getElementById('root') as HTMLElement);
