import * as React from 'react';
import './styles/App.scss';
import * as AppTypes from './types/AppTypes';
import NavBar from 'components/NavBar';
import AppContent from './AppContent';

const headerDecorator = require('images/header-decorator.png');
const logoSvg = require('images/logo.svg');

export const app = (props: AppTypes.AppProps) => {
  const { location:{ pathname }, children } = props;
  return (
    <div className="core-layout">
      <div className="content-wrap">
        <img className="header-decorator" src={headerDecorator} />
        <NavBar currentLocation={pathname} />
        <AppContent/>
      </div>
    </div>
  );
};

export default app;
