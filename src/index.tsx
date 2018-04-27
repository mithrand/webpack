import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'styles/index.scss';
import { AppProps } from './components/App/types/AppTypes';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import { routes } from './router/routes';

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
