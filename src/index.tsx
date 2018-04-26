import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import 'styles/index.scss';
import { AppProps } from './components/App/types/AppTypes';

const appProps: AppProps = {
  location:{
    pathname:'',
  },
  children: '',
};

ReactDOM.render(<App {...appProps} />,document.getElementById('root') as HTMLElement);
