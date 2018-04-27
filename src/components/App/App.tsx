import * as React from 'react';
import './styles/App.scss';
import * as AppTypes from './types/AppTypes';
import NavBar from 'components/NavBar';

const logoSvg = require('images/logo.svg');

export const app = (props: AppTypes.AppProps) => {
  const { location:{ pathname }, children } = props;
  return (
    <div className="core-layout">
      <div className="content-wrap">
        <img className="header-decorator" src="header-decorator.png" />
        <NavBar currentLocation={pathname} />
        <div className="layout-viewport">
          {children}
        </div>
      </div>
    </div>
  );
};

export default app;
